import getLeaderboardData from "@/app/libs/getLeaderboardData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

export default async function LeaderboardTable() {
  const leaderboardData = await getLeaderboardData();
  const leaderboards = leaderboardData.entries;

  // Sort leaderboard results in descending order by LP
  leaderboards.sort((a, b) => b.leaguePoints - a.leaguePoints);

  console.log(leaderboards);
  return (
    <Table>
      <TableCaption>Top 20 Challengers NA.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Tier</TableHead>
          <TableHead className="">LP</TableHead>
          <TableHead className="">Games</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboards.slice(0, 20).map((leaderboard, index) => (
          <TableRow key={leaderboard.summonerId}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{leaderboard.summonerName}</TableCell>
            <TableCell>Challenger</TableCell>
            <TableCell>{leaderboard.leaguePoints}</TableCell>
            <TableCell>Games</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
