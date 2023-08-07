const matchHistoryCache = {};

export default async function getMatchHistory(puuid) {
  if (matchHistoryCache[puuid]) {
    return matchHistoryCache[puuid];
  }

  const riotAPI = process.env.API_KEY;
  const matchHistoryResponse = await fetch(
    `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=2&api_key=${riotAPI}`,
    {
      headers: {
        'Cache-Control': 'max-age=1800',
      },
    }
  );

  if (!matchHistoryResponse.ok) {
    throw new Error('Failed to find match history');
  }

  const matchIds = await matchHistoryResponse.json();

  const mappedMatchHistory = matchIds.map((matchId) => {
    return {
      matchId: matchId,
    };
  });

  matchHistoryCache[puuid] = mappedMatchHistory;
  return mappedMatchHistory;
}
