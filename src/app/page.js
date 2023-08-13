import SummonerSearch from "@/app/components/SummonerSearch";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col text-center items-center mt-14">
        <h1 className="text-4xl font-bold">Team Fight Tactics Stats</h1>
        <h2 className="text-lg font-semibold">
          Find Detailed Team Fight Tactics Statistics and Leaderboards
        </h2>
        <div className="flex justify-center mx-auto w-1/2 py-2">
          <SummonerSearch />
        </div>
      </div>
    </section>
  );
}