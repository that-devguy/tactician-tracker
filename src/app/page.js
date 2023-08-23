import SummonerSearch from "@/app/components/SummonerSearch";
import HeroImage from "@/app/components/HeroImage";
import Top10 from "@/app/components/Top10Leaderboard";
import Image from "next/image";

export default function Home() {
  return (
    <section className="md:px-10">
      <div className="relative mb-10 flex h-[18rem] flex-col items-center gap-2 text-center md:mt-24">
        <div className="z-30 mt-10 flex flex-col gap-2">
          <h1 className="z-30 text-3xl font-black md:text-6xl">
            TACTICIAN TRACKER
          </h1>
          <h2 className="z-30 px-4 text-sm md:text-lg">
            Find Detailed Teamfight Tactics Stats, Leaderboards, and More.
          </h2>
          <div className="z-[100] mx-auto flex w-1/2 justify-center">
            <SummonerSearch />
          </div>
        </div>
        <div className="absolute mx-auto max-w-6xl md:rounded-lg">
          <HeroImage />
        </div>
      </div>

      <div className="mx-auto mb-5 max-w-6xl px-2">
        <div className="md:mb-5 flex max-h-28 justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="px-4 py-2 md:p-4">
            <h3 className="text-xl font-black md:text-3xl">TOP 10</h3>
            <p className="text-xs text-white md:text-sm">
              Discover the top 10 NA Challenger players.
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
        <Top10 />
      </div>
    </section>
  );
}
