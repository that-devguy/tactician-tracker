import SummonerSearch from "@/app/components/SummonerSearch";

export default function Home() {
  return (
    <section>
      <div className="mt-14 flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Team Fight Tactics Stats</h1>
        <h2 className="text-lg font-semibold">
          Find Detailed Team Fight Tactics Statistics and Leaderboards
        </h2>
        <div className="mx-auto flex w-1/2 justify-center">
          <SummonerSearch />
        </div>
      </div>
    </section>
  );
}
