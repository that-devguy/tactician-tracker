import Image from "next/image";
import getSummoner from "@/app/libs/getSummoner";
import getMatchHistory from "@/app/libs/getMatchHistory";
import getMatch from "@/app/libs/getMatch";
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

  return (
    <div>
      <div>Profile</div>
      <h1>{summonerData.name}</h1>
      <h2>
        {summonerData.summonerLevel} {summonerData.puuid}
      </h2>
      <Image
        src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/${summonerData.profileIconId}.png`}
        alt={summonerData.name}
        height="100"
        width="100"
      />
      <h2>Match History:</h2>
      {matchDetailsArray.map((matchDetails) => (
        <MatchTile
          key={matchDetails.matchId}
          matchDetails={matchDetails}
          summonerId={summonerId}
        />
      ))}
    </div>
  );
}
