import HeroBanner from "@/app/components/HeroBanner";
import Image from "next/image";
import Top10 from "@/app/components/Top10Leaderboard";

export default function Home() {
  return (
    <section className="lg:px-6">
      <div className="mx-auto flex h-full max-w-7xl flex-col lg:pt-8">
        <HeroBanner />
      </div>

      <div className="mx-auto mb-5 flex max-w-7xl flex-col px-2 md:px-6 lg:px-0">
        <div className="mb-2 flex max-h-28 justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="flex flex-col justify-center px-4 py-2 md:p-4">
            <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
              TOP 10
            </h3>
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
        <div>
          <Top10 />
        </div>
      </div>
    </section>
  );
}
