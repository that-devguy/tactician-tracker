import SummonerSearch from "@/app/components/SummonerSearch";
import HeroImage from "@/app/components/HeroImage";

export default function HeroBanner() {
  return (
    <section className="mb-10 flex flex-grow">
      <div className="relative flex w-full flex-grow items-center justify-center">
        <HeroImage />
        <div className="absolute top-14 z-[90] w-full transform text-center md:top-20">
          <div className="z-30 flex flex-col gap-2 px-2">
            <h1 className="z-30 px-2 text-3xl font-black sm:text-5xl md:text-6xl">
              TACTICIAN TRACKER
            </h1>
            <h2 className="z-30 px-4 text-sm md:text-lg">
              Find Detailed Teamfight Tactics Stats, Leaderboards, and More.
            </h2>
            <div className="z-[90] mx-auto flex w-1/2 justify-center px-2">
              <SummonerSearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
