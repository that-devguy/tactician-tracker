const { connectToDatabase } = require("../../../libs/mongo");

export default async function getLeaderboardData() {
  const riotAPI = process.env.API_KEY;

  if (!riotAPI) {
    console.error("Missing API_KEY environment variable.");
    return [];
  }

  const endpoints = {
    challenger: `https://na1.api.riotgames.com/tft/league/v1/challenger?queue=RANKED_TFT&api_key=${riotAPI}`,
    grandmaster: `https://na1.api.riotgames.com/tft/league/v1/grandmaster?queue=RANKED_TFT&api_key=${riotAPI}`,
    master: `https://na1.api.riotgames.com/tft/league/v1/master?queue=RANKED_TFT&api_key=${riotAPI}`,
    summonerById: "https://na1.api.riotgames.com/tft/summoner/v1/summoners/",
    accountByPuuid:
      "https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/",
  };

  const tierOrder = {
    challenger: 0,
    grandmaster: 1,
    master: 2,
  };

  async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status} ${response.statusText} for ${url}`);
    }

    return response.json();
  }

  async function fetchLeagueEntries(endpoint, tier) {
    try {
      const data = await fetchJson(endpoint);

      if (!Array.isArray(data.entries)) {
        console.warn(`No entries array returned for ${tier}`);
        return [];
      }

      return data.entries.map((entry) => ({
        ...entry,
        tier,
        gameName: null,
        tagLine: null,
      }));
    } catch (error) {
      console.error(`Failed to fetch ${tier} leaderboard:`, error.message);
      return [];
    }
  }

  async function fetchPlayerIdentityBySummonerId(summonerId) {
    try {
      const summonerData = await fetchJson(
        `${endpoints.summonerById}${summonerId}?api_key=${riotAPI}`
      );

      const puuid = summonerData?.puuid;
      if (!puuid) {
        return null;
      }

      const accountData = await fetchJson(
        `${endpoints.accountByPuuid}${puuid}?api_key=${riotAPI}`
      );

      return {
        puuid,
        gameName: accountData?.gameName || null,
        tagLine: accountData?.tagLine || null,
      };
    } catch (error) {
      console.error(`Failed to fetch identity for summonerId ${summonerId}:`, error.message);
      return null;
    }
  }

  let db = null;
  let collection = null;
  let existingSummonerMap = {};

  try {
    db = await connectToDatabase();
    collection = db.collection("summonerData");
  } catch (dbError) {
    console.error("Database unavailable, continuing without MongoDB:", dbError.message);
  }

  try {
    const [masterData, grandmasterData, challengerData] = await Promise.all([
      fetchLeagueEntries(endpoints.master, "master"),
      fetchLeagueEntries(endpoints.grandmaster, "grandmaster"),
      fetchLeagueEntries(endpoints.challenger, "challenger"),
    ]);

    const leaderboards = [...challengerData, ...grandmasterData, ...masterData];

    if (leaderboards.length === 0) {
      return [];
    }

    if (collection) {
      const existingSummoners = await collection
        .find({
          summonerId: { $in: leaderboards.map((player) => player.summonerId) },
        })
        .toArray();

      existingSummonerMap = existingSummoners.reduce((acc, player) => {
        acc[player.summonerId] = player;
        return acc;
      }, {});
    }

    const enrichedLeaderboards = await Promise.all(
      leaderboards.map(async (player) => {
        const existing = existingSummonerMap[player.summonerId];

        if (existing?.gameName && existing?.tagLine) {
          return {
            ...player,
            puuid: existing.puuid || null,
            gameName: existing.gameName,
            tagLine: existing.tagLine,
          };
        }

        const identity = await fetchPlayerIdentityBySummonerId(player.summonerId);

        if (identity && collection) {
          try {
            await collection.updateOne(
              { summonerId: player.summonerId },
              {
                $set: {
                  summonerId: player.summonerId,
                  puuid: identity.puuid,
                  gameName: identity.gameName,
                  tagLine: identity.tagLine,
                  lastUpdated: new Date(),
                },
              },
              { upsert: true }
            );
          } catch (writeError) {
            console.error(
              `Failed to upsert summoner ${player.summonerId}:`,
              writeError.message
            );
          }
        }

        return {
          ...player,
          puuid: identity?.puuid || null,
          gameName: identity?.gameName || null,
          tagLine: identity?.tagLine || null,
        };
      })
    );

    enrichedLeaderboards.sort((a, b) => {
      const tierDiff = tierOrder[a.tier] - tierOrder[b.tier];
      if (tierDiff !== 0) return tierDiff;
      return b.leaguePoints - a.leaguePoints;
    });

    return enrichedLeaderboards;
  } catch (error) {
    console.error("getLeaderboardData failed:", error.message);
    return [];
  }
}