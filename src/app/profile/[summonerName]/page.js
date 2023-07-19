import getSummoner from "@/app/libs/getSummoner";
import getMatchHistory from "@/app/libs/getMatchHistory";

export default async function profile({ params: { summonerName } }) {
  const summonerData = await getSummoner(summonerName);
  const summonerId = summonerData.puuid;
  const matchHistory = await getMatchHistory(summonerId);

  return (
    <div>
      <div>Profile</div>
      <h1>{summonerData.name}</h1>
      <h2>{summonerData.summonerLevel}</h2>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/${summonerData.profileIconId}.png`}
        alt=""
        height="100"
        width="100"
      />
      <h2>{matchHistory}</h2>
    </div>
  );
}
