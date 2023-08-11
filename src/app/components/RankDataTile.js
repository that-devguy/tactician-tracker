import Image from "next/image";
import { Progress } from "@/app/components/ui/progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faCircle } from "@fortawesome/free-solid-svg-icons";

function getRankNum(rank) {
  if (rank === `I`) {
    return `1`;
  } else if (rank === `II`) {
    return `2`;
  } else if (rank === `III`) {
    return `3`;
  } else if (rank === `IV`) {
    return `4`;
  } else {
    return ``;
  }
}

function getWinLoss(wins, losses) {
  const numGames = wins + losses;
  const winRate = (wins / numGames) * 100;
  const roundedWinRate = Math.round(winRate);
  return roundedWinRate;
}

const RankDataTile = ({ leagueData }) => {
  console.log(leagueData);
  const { tier, rank, leaguePoints, wins, losses, hotStreak } =
    leagueData[0] || {};

  const capTier = tier && tier.charAt(0) + tier.slice(1).toLowerCase();

  const rankNum = getRankNum(rank);

  return (
    <div className="mb-3 select-none rounded-md bg-brand-bg">
      <div className="flex items-center gap-3 rounded-md">
        <div className="h-fit w-5/12">
          <Image
            className="mx-auto"
            src={`/tierEmblem-${tier.toLowerCase()}.png`}
            alt={`${capTier} tier emblem`}
            height={131}
            width={150}
            layout="fixed"
          />
        </div>
        <div className="mr-6 w-7/12">
          <p className="text-xs text-white/50">Ranked</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">
              {capTier} {rankNum}
            </p>
            <p className="font-light">{leaguePoints} LP</p>
          </div>
          <Progress value={leaguePoints} className="my-1" />
          <div className="flex items-center justify-between py-1 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <p>{wins}W</p>
              <p>{losses}L</p>
              <FontAwesomeIcon
                className="h-[0.3px] w-[0.3px]"
                icon={faCircle}
              />
              <p className="">Top4</p>
              <p className="font-bold text-white">
                {getWinLoss(wins, losses)}%
              </p>
            </div>
            <FontAwesomeIcon
              icon={faFire}
              className={`mr-1 text-brand-main ${
                !hotStreak ? `invisible` : ``
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankDataTile;
