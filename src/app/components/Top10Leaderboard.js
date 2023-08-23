import getLeaderboardData from "@/app/libs/getLeaderboardData";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Top10LeaderboardTable() {
  const leaderboardData = await getLeaderboardData();
  const leaderboards = leaderboardData.entries;

  // Sort leaderboard results in descending order by LP
  leaderboards.sort((a, b) => b.leaguePoints - a.leaguePoints);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="headers flex justify-between px-2 py-2 text-xs font-light text-white/50 md:text-sm">
        <p className="w-1/12">Rank</p>
        <p className="w-3/12">Name</p>
        <p className="w-1/12">Tier</p>
        <p className="w-1/12">LP</p>
        <p className="w-2/12">Top4</p>
        <p className="w-2/12">Games</p>
      </div>
      {leaderboards.slice(0, 10).map((leaderboard, index) => {
        let rank = "leaderboard-tile"; // Default border style

        if (index + 1 === 1) {
          rank = "first-placeTile";
        } else if (index + 1 === 2) {
          rank = "second-placeTile";
        } else if (index + 1 === 3) {
          rank = "third-placeTile";
        } else if (index + 1 === 4) {
          rank = "fourth-placeTile";
        }

        let gamesPlayed = leaderboard.wins + leaderboard.losses;
        let top4Percent = (leaderboard.wins / gamesPlayed) * 100;
        let winRate = Math.round(top4Percent);

        return (
          <div
            key={leaderboard.summonerId}
            className="mb-2 flex items-center justify-between rounded-lg bg-brand-bg2 px-2 py-2 text-[.7rem] md:text-sm"
          >
            <div className="w-1/12">
              <div
                className={`${rank} flex h-6 w-6 items-center justify-center rounded-md md:h-7 md:w-7`}
              >
                <p
                  className={`flex h-5 w-5 items-center justify-center rounded-md bg-brand-bg2 md:h-6 md:w-6 ${
                    index + 1 === 1 ? `text-white` : `text-white/50`
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            </div>

            <Link
              href={`/profile/${leaderboard.summonerName}`}
              className="w-3/12 hover:underline truncate"
            >
              {leaderboard.summonerName}
              <div className="hidden">
                <FontAwesomeIcon
                  icon={faLink}
                  className="ml-1 text-xs text-white/50"
                />
              </div>
            </Link>
            <p className="flex w-1/12 gap-1">
              <Image
                src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/challenger.png"
                height="22"
                width="22"
                alt="Mini Challenger Emblem"
                className="select-none"
              />
              <span className="hidden md:block">Challenger</span>
            </p>
            <p className="w-1/12 text-white/50">{leaderboard.leaguePoints}</p>
            <p className="w-2/12 text-white/50">
              {leaderboard.wins}{" "}
              <span className="font-light text-brand-secondary">
                ({winRate}%)
              </span>
            </p>
            <p className="w-2/12 text-white/50">{gamesPlayed}</p>
          </div>
        );
      })}
      <div className="flex justify-center">
        <Link
          href="/leaderboards"
          className="my-1 md:my-3 px-4 text-sm text-white/50 hover:text-brand-main"
        >
          View Leaderboards
        </Link>
      </div>
    </div>
  );
}
