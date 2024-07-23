import { connectToDatabase } from "../../../libs/mongo";

export default async function getSummoner(summonerName, tagLine) {
  const riotAPI = process.env.API_KEY;
  const cacheMaxAge = 3600;

  const cacheOptions = {
    method: "GET",
    headers: new Headers({
      "Cache-Control": `max-age=${cacheMaxAge}`,
    }),
  };

  const endpoints = {
    summonerByRiotId: `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tagLine}`,
    summonerByPuuid: `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/`,
  };

  try {
    // Fetch initial summoner data by Riot ID
    const response = await fetch(
      `${endpoints.summonerByRiotId}?api_key=${riotAPI}`,
      cacheOptions
    );

    if (!response.ok) {
      throw new Error("Failed to find summoner by Riot ID");
    }

    const summonerData = await response.json();
    console.log(summonerData);
    const puuid = summonerData.puuid;

    if (!puuid) {
      throw new Error("PUUID is missing in the API response");
    }

    // Fetch additional summoner data by puuid
    const puuidResponse = await fetch(
      `${endpoints.summonerByPuuid}${puuid}?api_key=${riotAPI}`,
      cacheOptions
    );

    if (!puuidResponse.ok) {
      throw new Error("Failed to find summoner by PUUID");
    }

    const puuidData = await puuidResponse.json();
    console.log(puuidData);

    const updateData = {
      summonerId: puuidData.id,
      accountId: puuidData.accountId,
      puuid: puuidData.puuid,
      tagLine: summonerData.tagLine,
      gameName: summonerData.gameName,
      profileIconId: puuidData.profileIconId,
      summonerLevel: puuidData.summonerLevel,
      lastUpdated: new Date(),
    };

    const db = await connectToDatabase();
    const collection = db.collection("summonerData");

    console.log("Updating MongoDB with:", updateData);

    const result = await collection.updateOne(
      { summonerId: puuidData.id },
      {
        $set: updateData,
      },
      { upsert: true }
    );

    console.log("MongoDB update result:", result);

    return { ...summonerData, ...updateData };
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching summoner data.");
  }
}
