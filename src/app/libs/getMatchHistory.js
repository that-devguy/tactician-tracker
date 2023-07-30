export default async function getMatchHistory(summonerId) {
  const riotAPI = process.env.API_KEY;
  const matchHistoryResponse = await fetch(
    `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${summonerId}/ids?start=0&count=1&api_key=${riotAPI}`
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
