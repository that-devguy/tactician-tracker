import Image from "next/image";
import getSummoner from "@/app/libs/getSummoner";
import getMatchHistory from "@/app/libs/getMatchHistory";
import getMatch from "@/app/libs/getMatch";
import getUnitData from "@/app/libs/getUnitData";
import MatchTile from "@/app/components/MatchTile";

export default async function profile({ params: { summonerName } }) {
  const summonerData = await getSummoner(summonerName);
  const summonerId = summonerData.puuid;
  const matchHistoryArray = await getMatchHistory(summonerId);

  const matchDetailsArray = await Promise.all(
    matchHistoryArray.map(async (match) => {
      const matchDetails = await getMatch(match.matchId);
      return matchDetails;
    })
  );

  const tft_set_number = matchDetailsArray[0]?.info?.tft_set_number || 9;
  const championData = await getUnitData(tft_set_number);

  return (
    <section className="max-w-5xl mx-auto">
      <div className="profile-headerCard flex items-center gap-5 p-4">
        <div className="flex flex-col justify-center py-2">
          <Image
            className="rounded-full ring-4 ring-brand-main border-4 border-transparent"
            src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/${summonerData.profileIconId}.png`}
            alt={summonerData.name}
            height="100"
            width="100"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-4xl">{summonerData.name}</h1>
            <p className="font-bold text-md bg-brand-bg2 px-3 py-1 rounded-md">
              NA
            </p>
          </div>
          <p className="w-fit font-black text-xs bg-brand-secondary text-brand-bg mx-1 px-3 py-1 rounded-md">
            Level {summonerData.summonerLevel}
          </p>
        </div>
      </div>
      {matchDetailsArray.map((matchDetails) => (
        <MatchTile
          key={matchDetails.matchId}
          matchDetails={matchDetails}
          summonerId={summonerId}
          championData={championData}
        />
      ))}
    </section>
  );
}
