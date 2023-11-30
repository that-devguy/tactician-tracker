export default async function getMatch(matchId) {
  const riotAPI = process.env.API_KEY;
  const cacheMaxAge = 3600;

  const cacheOptions = {
    method: "GET",
    headers: new Headers({
      "Cache-Control": `max-age=${cacheMaxAge}`,
    }),
  };

  const matchResponse = await fetch(
    `https://americas.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${riotAPI}`,
    cacheOptions
  );

  if (!matchResponse.ok) {
    throw new Error("Failed to find match history");
  }

  const matchDataById = await matchResponse.json();

  return matchDataById;
}
