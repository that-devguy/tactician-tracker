export default async function getSummonerLeagueData(summonerId) {
  const riotAPI = process.env.API_KEY;
  const response = await fetch(
    `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${riotAPI}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("failed to find summoner data");
  }
  return response.json();
}
