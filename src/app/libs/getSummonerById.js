export default async function getSummonerById(puuid) {
  const riotAPI = process.env.API_KEY;
  const response = await fetch(
    `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${puuid}?api_key=${riotAPI}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("failed to find summoner by puuid: " + puuid);
  }
  return response.json();
}
