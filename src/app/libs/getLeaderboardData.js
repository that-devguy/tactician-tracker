export default async function getLeaderboardData() {
  const riotAPI = process.env.API_KEY;
  const response = await fetch(
    `https://na1.api.riotgames.com/tft/league/v1/challenger?api_key=${riotAPI}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("failed to find leaderboard data");
  }
  return response.json();
}
