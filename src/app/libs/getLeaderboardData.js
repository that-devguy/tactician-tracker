export default async function getLeaderboardData() {
  const riotAPI = process.env.API_KEY;
  const challengerEndpoint = `https://na1.api.riotgames.com/tft/league/v1/challenger?api_key=${riotAPI}`;
  const grandMasterEndpoint = `https://na1.api.riotgames.com/tft/league/v1/grandmaster?api_key=${riotAPI}`;
  const masterEndpoint = `https://na1.api.riotgames.com/tft/league/v1/master?api_key=${riotAPI}`;

  try {
    // Fetch data from the three endpoints in parallel
    const [challengerResponse, grandMasterResponse, masterResponse] =
      await Promise.all([
        fetch(challengerEndpoint),
        fetch(grandMasterEndpoint),
        fetch(masterEndpoint),
      ]);

    // Process and combine the data from different tiers
    const sortedLeaderboards = [];

    // Handle Challenger data
    if (challengerResponse.ok) {
      const challengerData = await challengerResponse.json();
      sortedLeaderboards.push(
        ...challengerData.entries.map((entry) => ({
          ...entry,
          tier: "challenger",
        }))
      );
    }

    // Handle Grandmaster data
    if (grandMasterResponse.ok) {
      const grandMasterData = await grandMasterResponse.json();
      sortedLeaderboards.push(
        ...grandMasterData.entries.map((entry) => ({
          ...entry,
          tier: "grandmaster",
        }))
      );
    }

    // Handle Master data
    if (masterResponse.ok) {
      const masterData = await masterResponse.json();
      sortedLeaderboards.push(
        ...masterData.entries.map((entry) => ({
          ...entry,
          tier: "master",
        }))
      );
    }

    // Sort by tier first (Challenger > Grandmaster > Master)
    sortedLeaderboards.sort((a, b) => {
      if (a.tier !== b.tier) {
        return a.tier.localeCompare(b.tier);
      } else {
        // If tiers are the same, sort by leaguePoints in descending order
        return b.leaguePoints - a.leaguePoints;
      }
    });

    return sortedLeaderboards;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching leaderboard data.");
  }
}
