import Image from "next/image";

const RankDataTile = ({ leagueData }) => {
  console.log(leagueData);
  const tier = leagueData[0].tier;
  return (
    <div className="flex flex-col mb-2 py-3 px-5 bg-brand-bg2 rounded-md select-none">
      <div className="flex justify-between items-center my-5 gap-3 bg-brand-bg2 rounded-md">
        <Image
          src={`/tierEmblem-${tier.toLowerCase()}.png`}
          alt="ranked-emblem"
          height="150"
          width="150"
        />
        <p>
          {tier} {leagueData[0].rank}
        </p>
      </div>
    </div>
  );
};

export default RankDataTile;
