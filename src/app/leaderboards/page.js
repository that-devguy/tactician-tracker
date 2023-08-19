import getChallengerLeague from "@/app/libs/getChallengerLeague";

export default async function Leaderboards() {
  const challengerLeague = await getChallengerLeague();
  const leaderboards = challengerLeague.entries;
  console.log(leaderboards);
  return (
    <section className="px-10">
      <div>Leaderboards</div>
      {leaderboards.slice(0, 20).map((leaderboard) => (
        <p key={leaderboard.summonerId}>{leaderboard.summonerName}</p>
      ))}
    </section>
  );
}
