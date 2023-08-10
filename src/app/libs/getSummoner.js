const summonerCache = {};

export default async function getSummoner(summonerName) {
  if (summonerCache[summonerName]) {
    return summonerCache[summonerName];
  }
  const riotAPI = process.env.API_KEY;
  const response = await fetch(
    `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${riotAPI}`,
    {
      headers: {
        "Cache-Control": "max-age=1800, must-revalidate",
      },
    }
  );

  if (!response.ok) {
    throw new Error("failed to find summoner");
  }
  return response.json();
}
