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

    const fetchData = async (endpoint, tier) => {
      const response = await fetch(endpoint, { cache: "no-cache" });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.entries)) {
          return data.entries.map((entry) => ({
            ...entry,
            tier,
          }));
        } else {
          console.warn(`No entries found in response from ${endpoint}`);
          return [];
        }
      } else {
        console.error(
          `Failed to fetch from ${endpoint}, status: ${response.status}`
        );
        return [];
      }
    };

    // Fetch data from all relevant endpoints in parallel
    const [masterData, grandmasterData, challengerData] = await Promise.all([
      fetchData(endpoints.master, "master"),
      fetchData(endpoints.grandmaster, "grandmaster"),
      fetchData(endpoints.challenger, "challenger"),
    ]);

    sortedLeaderboards.push(
      ...masterData,
      ...grandmasterData,
      ...challengerData
    );

    const db = await connectToDatabase();
    const collection = db.collection("summonerData");

    if (sortedLeaderboards.length === 0) {
      // Clear the database if no data is fetched
      await collection.deleteMany({});
      return { message: "Waiting for players to rank up" };
    }

    // Get all existing summonerIds in the database in one query
    const existingSummoners = await collection
      .find({
        summonerId: { $in: sortedLeaderboards.map((lb) => lb.summonerId) },
      })
      .toArray();

    const existingSummonerMap = existingSummoners.reduce((acc, summoner) => {
      acc[summoner.summonerId] = summoner;
      return acc;
    }, {});

    // Update database with new data
    const leaderboardUpdates = sortedLeaderboards.map(async (leaderboard) => {
      const summonerId = leaderboard.summonerId;

      if (!existingSummonerMap[summonerId]) {
        const summonerById = await fetch(
          `${endpoints.summonerById}${summonerId}?api_key=${riotAPI}`
        );
        if (summonerById.ok) {
          const summonerData = await summonerById.json();
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

            leaderboard.summonerName = summonerData.gameName;
            leaderboard.tagLine = accountData.tagLine;
          }
        }
      } else {
        leaderboard.summonerName = existingSummonerMap[summonerId].gameName;
        leaderboard.tagLine = existingSummonerMap[summonerId].tagLine;
      }
    });

    await Promise.all(leaderboardUpdates);

    return sortedLeaderboards.map((entry) => ({
      ...entry,
      tagLine: entry.tagLine,
    }));
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching leaderboard data.");
  }
}
