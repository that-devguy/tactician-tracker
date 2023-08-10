const matchCache = {};

export default async function getMatch(matchId) {
  if (matchCache[matchId]) {
    return matchCache[matchId];
  }
  const riotAPI = process.env.API_KEY;
  const matchResponse = await fetch(
    `https://americas.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${riotAPI}`,
    {
      headers: {
        "Cache-Control": "max-age=1800, must-revalidate",
      },
    }
  );

  if (!matchResponse.ok) {
    throw new Error("Failed to find match history");
  }

  const matchDataById = await matchResponse.json();

  return matchDataById;
}
