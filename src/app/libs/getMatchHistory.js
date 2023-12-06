export default async function getMatchHistory(puuid) {
  const riotAPI = process.env.API_KEY;
  const cacheMaxAge = 3600;

  const cacheOptions = {
    method: "GET",
    headers: new Headers({
      "Cache-Control": `max-age=${cacheMaxAge}`,
    }),
  };

  const matchHistoryResponse = await fetch(
    `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${riotAPI}`,
    cacheOptions
  );

  if (!matchHistoryResponse.ok) {
    throw new Error("Failed to find match history");
  }

  const matchIds = await matchHistoryResponse.json();

  const mappedMatchHistory = matchIds.map((matchId) => {
    return {
      matchId: matchId,
    };
  });

  return mappedMatchHistory;
}
