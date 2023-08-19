import Image from "next/image";
import SummonerSearch from "@/app/components/SummonerSearch";
import HeroImage from "@/app/components/HeroImage";

export default function Home() {
  return (
    <section>
      <div className="mt-14 flex flex-col items-center gap-2 px-10 text-center">
        <h1 className="text-6xl font-bold">Teamfight Tactics Stats</h1>
        <h2 className="text-lg">
          Find Detailed Teamfight Tactics Statistics and Leaderboards
        </h2>
        <div className="mx-auto flex w-1/2 justify-center">
          <SummonerSearch />
        </div>
        <HeroImage />
      </div>
    </section>
  );
}
