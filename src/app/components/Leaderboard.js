import getLeaderboardData from "@/app/libs/getLeaderboardData";

export default async function LeaderboardTable() {
  const leaderboardData = await getLeaderboardData();
  const leaderboards = leaderboardData.entries;

  // Sort leaderboard results in descending order by LP
  leaderboards.sort((a, b) => b.leaguePoints - a.leaguePoints);

  console.log(leaderboards);
  return (
    <div className="px-10">
      {leaderboards.slice(0, 20).map((leaderboard) => (
        <p key={leaderboard.summonerId}>{leaderboard.summonerName}</p>
      ))}
    </div>
  );
}
