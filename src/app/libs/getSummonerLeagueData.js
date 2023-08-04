const summonerLeagueData = {};

export default async function getSummonerLeagueData(summonerId) {
  if (summonerLeagueData[summonerId]) {
    return summonerLeagueData[summonerId];
  }
  const riotAPI = process.env.API_KEY;
  const response = await fetch(
    `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${riotAPI}`
  );

  if (!response.ok) {
    throw new Error("failed to find summoner data");
  }
  return response.json();
}
