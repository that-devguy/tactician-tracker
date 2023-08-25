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
import MatchPlacementsTile from "@/app/components/MatchPlacementsTile";

export default async function Profile({ params: { summonerName } }) {
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
  const placements = matchDetailsArray.map(
    (matchDetails) =>
      matchDetails.info.participants.find(
        (participant) => participant.puuid === puuid
      ).placement
  );

  return (
    <section className="mx-auto max-w-7xl px-2 pt-4 text-lg md:px-10 md:pt-8">
      <div className="profile-headerCard flex flex-col items-center gap-1 p-2 md:flex-row md:gap-5 md:p-4">
        <div className="flex flex-col justify-center py-2">
          <Image
            className="rounded-full border-4 border-transparent ring-4 ring-brand-main"
            src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summonerData.profileIconId}.jpg`}
            alt={summonerData.name}
            height="100"
            width="100"
          />
        </div>
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold md:text-4xl">
              {summonerData.name}
            </h1>
            <p className="md:text-md hidden select-none rounded-md bg-brand-bg2 px-3 py-1 text-sm font-bold md:block">
              NA
            </p>
          </div>
          <p className="mx-1 w-fit select-none rounded-md bg-brand-secondary px-3 py-1 text-xs font-black text-brand-bg">
            Level {summonerData.summonerLevel}
          </p>
        </div>
      </div>
      <div>
        <div className="md:m-w-none mx-auto mb-6 max-w-lg py-3 md:mx-0 md:w-8/12 md:px-2 lg:w-5/12">
          <RankDataTile leagueData={leagueData} />
          <MatchPlacementsTile placements={placements} />
        </div>
      </div>
      {matchDetailsArray.slice(0, 1).map((matchDetails) => (
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
