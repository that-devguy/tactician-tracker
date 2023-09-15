export default async function getLeaderboardData() {
  const riotAPI = process.env.API_KEY;
  const challengerEndpoint = `https://na1.api.riotgames.com/tft/league/v1/challenger?api_key=${riotAPI}`;
  const grandMasterEndpoint = `https://na1.api.riotgames.com/tft/league/v1/grandmaster?api_key=${riotAPI}`;
  const masterEndpoint = `https://na1.api.riotgames.com/tft/league/v1/master?api_key=${riotAPI}`;

  try {
    const [challengerResponse, grandMasterResponse, masterResponse] =
      await Promise.all([
        fetch(challengerEndpoint, { next: { revalidate: 3600 } }),
        fetch(grandMasterEndpoint, { next: { revalidate: 3600 } }),
        fetch(masterEndpoint, { next: { revalidate: 3600 } }),
      ]);

    if (
      !challengerResponse.ok ||
      !grandMasterResponse.ok ||
      !masterResponse.ok
    ) {
      throw new Error("failed to fetch one or more endpoint");
    }

    const [challengerData, grandMasterData, masterData] = await Promise.all([
      challengerResponse.json(),
      grandMasterResponse.json(),
      masterResponse.json(),
    ]);

    // Add a 'tier' field to each entry
    const challengerEntries = challengerData.entries.map((entry) => ({
      ...entry,
      tier: "challenger",
    }));
    const grandMasterEntries = grandMasterData.entries.map((entry) => ({
      ...entry,
      tier: "grandmaster",
    }));
    const masterEntries = masterData.entries.map((entry) => ({
      ...entry,
      tier: "master",
    }));

    // Combine the entries from each tier
    const leaderboards = [
      ...challengerEntries,
      ...grandMasterEntries,
      ...masterEntries,
    ];

    return leaderboards;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while fetching leaderboard data.");
  }
}
