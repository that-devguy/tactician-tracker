import Image from "next/image";
import getSummoner from "@/app/libs/getSummoner";
import getMatchHistory from "@/app/libs/getMatchHistory";
import getMatch from "@/app/libs/getMatch";
import getUnitData from "@/app/libs/getUnitData";
import getAugmentData from "@/app/libs/getAugmentData";
import getTraitsData from "@/app/libs/getTraitsData";
import getSummonerLeagueData from "@/app/libs/getSummonerLeagueData";
import MatchTile from "@/app/components/MatchTile";
import RankDataTile from "@/app/components/RankDataTile";

export default async function profile({ params: { summonerName } }) {
  const summonerData = await getSummoner(summonerName);
  const puuid = summonerData.puuid;
  const summonerId = summonerData.id;
  const matchHistoryArray = await getMatchHistory(puuid);
  const leagueData = await getSummonerLeagueData(summonerId);

  const matchDetailsArray = await Promise.all(
    matchHistoryArray.map(async (match) => {
      const matchDetails = await getMatch(match.matchId);
      return matchDetails;
    })
  );

  const tft_set_number = matchDetailsArray[0]?.info?.tft_set_number || 9;
  const championData = await getUnitData(tft_set_number);
  const augmentData = await getAugmentData();
  const traitData = await getTraitsData(tft_set_number);

  return (
    <section className="max-w-5xl mx-auto">
      <div className="profile-headerCard flex items-center gap-5 p-4">
        <div className="flex flex-col justify-center py-2">
          <Image
            className="rounded-full ring-4 ring-brand-main border-4 border-transparent"
            src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summonerData.profileIconId}.jpg`}
            alt={summonerData.name}
            height="100"
            width="100"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-4xl">{summonerData.name}</h1>
            <p className="font-bold text-md bg-brand-bg2 px-3 py-1 rounded-md select-none">
              NA
            </p>
          </div>
          <p className="w-fit font-black text-xs bg-brand-secondary text-brand-bg mx-1 px-3 py-1 rounded-md select-none">
            Level {summonerData.summonerLevel}
          </p>
        </div>
      </div>
      <div>
        <div className="w-1/3">
          <RankDataTile leagueData={leagueData} />
        </div>
      </div>
      {matchDetailsArray.map((matchDetails) => (
        <MatchTile
          key={matchDetails.matchId}
          matchDetails={matchDetails}
          puuid={puuid}
          championData={championData}
          augmentData={augmentData}
          traitData={traitData}
        />
      ))}
    </section>
  );
}
