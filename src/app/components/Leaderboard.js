import getLeaderboardData from "@/app/libs/getLeaderboardData";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function LeaderboardTable() {
  const leaderboardData = await getLeaderboardData();
  const leaderboards = leaderboardData.entries;

  // Sort leaderboard results in descending order by LP
  leaderboards.sort((a, b) => b.leaguePoints - a.leaguePoints);

  console.log(leaderboards);
  return (
    <div className="mx-auto max-w-6xl">
      <div className="headers flex justify-between px-4 py-2 text-sm font-light text-white/50">
        <p className="w-1/12">Rank</p>
        <p className="w-3/12">Name</p>
        <p className="w-2/12">Tier</p>
        <p className="w-1/12">LP</p>
        <p className="w-1/12">Games</p>
      </div>
      {leaderboards.slice(0, 20).map((leaderboard, index) => (
        <div
          key={leaderboard.summonerId}
          className="mb-2 flex justify-between rounded-lg bg-brand-bg2 px-4 py-2 text-sm"
        >
          <p className="w-1/12">{index + 1}</p>
          <Link href={`/profile/${leaderboard.summonerName}`} className="w-3/12 hover:underline">
            {leaderboard.summonerName}
            <FontAwesomeIcon icon={faLink} className="ml-1 text-white/50 text-xs" />
          </Link>
          <p className="w-2/12">Challenger</p>
          <p className="w-1/12 text-white/50">{leaderboard.leaguePoints}</p>
          <p className="w-1/12 text-white/50">Games</p>
        </div>
      ))}
    </div>
  );
}
