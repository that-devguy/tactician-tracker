export default async function getMatchHistory(summonerId) {
  const riotAPI = process.env.API_KEY;
  const matchHistory = await fetch(
    `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${summonerId}/ids?start=0&count=20&api_key=${riotAPI}`
  );

  if (!matchHistory.ok) {
    throw new Error("failed to find match history");
  }
  return matchHistory.json();
}
