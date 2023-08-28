import { use } from "react";
import Leaderboard from "@/app/components/Leaderboards";
import getLeaderboardData from "@/app/libs/getLeaderboardData";
import Image from "next/image";

async function getLeaderboards() {
  const leaderboardData = await getLeaderboardData();
  const leaderboards = leaderboardData.entries;

  // Sort leaderboard results in descending order by LP
  leaderboards.sort((a, b) => b.leaguePoints - a.leaguePoints);

  return leaderboards;
}

export default function LeaderboardPage() {
  const leaderboards = use(getLeaderboards());
  console.log(leaderboards);

  return (
    <section className="px-2 pt-8 md:px-6 lg:px-6">
      <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
        <div className="flex flex-col justify-center px-4 py-2 md:p-4">
          <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
            LEADERBOARDS
          </h3>
          <p className="text-xs text-white sm:hidden">
            Discover the top Challenger players!
          </p>
          <p className="hidden text-xs text-white sm:block md:text-sm">
            Discover the top Challenger players; browse their match history,
            stats, and more.
          </p>
        </div>
        <Image
          src="/leaderboard_image.png"
          height="200"
          width="200"
          alt="Pengu with Trophy"
          className="h-fill select-none overflow-hidden"
        />
      </div>
      <Leaderboard leaderboards={leaderboards} />
    </section>
  );
}
