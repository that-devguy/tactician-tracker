export default async function getSummoner(summonerName) {
  const riotAPI = process.env.API_KEY;
  const cacheMaxAge = 3600;

  const cacheOptions = {
    method: "GET",
    headers: new Headers({
      "Cache-Control": `max-age=${cacheMaxAge}`,
    }),
  };

  const response = await fetch(
    `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${riotAPI}`,
    cacheOptions
  );

  if (!response.ok) {
    throw new Error("failed to find summoner");
  }
  return response.json();
}
