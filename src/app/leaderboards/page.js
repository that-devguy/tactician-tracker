import getChallengerLeague from "@/app/libs/getChallengerLeague";

export default async function Leaderboards() {
  const challengerLeague = await getChallengerLeague();
  console.log(challengerLeague);
  const leaderboards = challengerLeague.entries
  console.log(leaderboards);
  return (
    <section className="px-10">
      <div>Leaderboards</div>
    </section>
  );
}
