import SummonerSearch from "@/app/components/SummonerSearch";
import HeroImage from "@/app/components/HeroImage";

export default function Home() {
  return (
    <section className="px-10">
      <div className="mt-24 flex flex-col items-center gap-2 text-center">
        <h1 className="z-50 text-6xl font-bold">Teamfight Tactics Stats</h1>
        <h2 className="z-50 text-lg">
          Find Detailed Teamfight Tactics Statistics and Leaderboards
        </h2>
        <div className="z-50 mx-auto flex w-1/2 justify-center">
          <SummonerSearch />
        </div>
      </div>
      <div className="h-92 mx-auto -mt-48 max-w-6xl overflow-hidden rounded-lg">
        <HeroImage />
      </div>
    </section>
  );
}
