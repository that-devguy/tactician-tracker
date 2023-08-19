import SummonerSearch from "@/app/components/SummonerSearch";
import HeroImage from "@/app/components/HeroImage";
import Top10 from "@/app/components/Top10Leaderboard";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-10">
      <div className="mt-24 flex flex-col items-center gap-2 text-center">
        <h1 className="z-50 text-6xl font-black">TACTICIAN TRACKER</h1>
        <h2 className="z-50 text-lg">
          Find Detailed Teamfight Tactics Stats, Leaderboards, and More.
        </h2>
        <div className="z-50 mx-auto flex w-1/2 justify-center">
          <SummonerSearch />
        </div>
      </div>
      <div className="h-92 mx-auto -mt-48 mb-10 max-w-6xl overflow-hidden rounded-lg">
        <HeroImage />
      </div>
      <div className="mx-auto mb-5 max-w-6xl">
        <div className="mb-5 flex max-h-28 justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="p-4">
            <h3 className="text-3xl font-black">TOP 10</h3>
            <p className="text-sm text-white">
              Discover the top 10 NA Challenger players.
            </p>
          </div>
          <Image
            src="/leaderboard_image.png"
            height="200"
            width="200"
            alt="Pengu with Trophy"
            className="h-full select-none overflow-hidden"
          />
        </div>
        <Top10 />
      </div>
    </section>
  );
}
