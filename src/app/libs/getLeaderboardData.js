const { connectToDatabase } = require("../../../libs/mongo");

export default async function getLeaderboardData() {
  const riotAPI = process.env.API_KEY;
  const endpoints = {
    challenger: `https://na1.api.riotgames.com/tft/league/v1/challenger?queue=RANKED_TFT&api_key=${riotAPI}`,
    grandmaster: `https://na1.api.riotgames.com/tft/league/v1/grandmaster?queue=RANKED_TFT&api_key=${riotAPI}`,
    master: `https://na1.api.riotgames.com/tft/league/v1/master?queue=RANKED_TFT&api_key=${riotAPI}`,
    summonerById: `https://na1.api.riotgames.com/tft/summoner/v1/summoners/`,
    accountByPuuid: `https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/`,
  };

  try {
    const sortedLeaderboards = [];

    // Fetch Challenger data
    const challengerResponse = await fetch(endpoints.challenger, {
      cache: "default",
    });
    if (challengerResponse.ok) {
      const challengerData = await challengerResponse.json();
      sortedLeaderboards.push(
        ...challengerData.entries.map((entry) => ({
          ...entry,
          tier: "challenger",
        }))
      );
    } else {
      console.log("No Challenger data found, fetching Grandmaster data...");
      // Fetch Grandmaster data if no Challenger data
      const grandMasterResponse = await fetch(endpoints.grandmaster, {
        cache: "no-cache",
      });
      if (grandMasterResponse.ok) {
        const grandMasterData = await grandMasterResponse.json();
        sortedLeaderboards.push(
          ...grandMasterData.entries.map((entry) => ({
            ...entry,
            tier: "grandmaster",
          }))
        );
      } else {
        console.log("No Grandmaster data found, fetching Master data...");
        // Fetch Master data if no Grandmaster data
        const masterResponse = await fetch(endpoints.master, {
          cache: "no-cache",
        });
        if (masterResponse.ok) {
          const masterData = await masterResponse.json();
          sortedLeaderboards.push(
            ...masterData.entries.map((entry) => ({
              ...entry,
              tier: "master",
            }))
          );
        } else {
          console.error("Failed to fetch leaderboard data");
        }
      }
    }

    sortedLeaderboards.sort((a, b) => {
      if (a.tier !== b.tier) {
        return a.tier.localeCompare(b.tier);
      } else {
        return b.leaguePoints - a.leaguePoints;
      }
    });

    const db = await connectToDatabase();
    const collection = db.collection("summonerData");

    for (const leaderboard of sortedLeaderboards) {
      const summonerId = leaderboard.summonerId;
      let summonerData = await collection.findOne({ summonerId });

      if (!summonerData) {
        const summonerById = await fetch(
          `${endpoints.summonerById}${summonerId}?api_key=${riotAPI}`
        );

        if (summonerById.ok) {
          summonerData = await summonerById.json();
          const puuid = summonerData.puuid;

          const accountByPuuid = await fetch(
            `${endpoints.accountByPuuid}${puuid}?api_key=${riotAPI}`
          );

          if (accountByPuuid.ok) {
            const accountData = await accountByPuuid.json();
            summonerData.gameName = accountData.gameName;

            await collection.updateOne(
              { summonerId },
              {
                $set: {
                  puuid,
                  gameName: summonerData.gameName,
                  tagLine: accountData.tagLine,
                  lastUpdated: new Date(),
                },
              },
              { upsert: true }
            );
          } else {
            console.error(`Failed to fetch game name for puuid: ${puuid}`);
          }
        } else {
          console.error(
            `Failed to fetch summoner data for summonerId: ${summonerId}`
          );
        }
      } else {
        leaderboard.summonerName = summonerData.gameName;
        leaderboard.tagLine = summonerData.tagLine;
      }
    }

    // console.log(sortedLeaderboards);

    return sortedLeaderboards.map((entry) => ({
      ...entry,
      tagLine: entry.tagLine,
    }));
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching leaderboard data.");
  }
}
