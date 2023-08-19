import Leaderboard from "@/app/components/Leaderboards";
import Image from "next/image";

export default async function Leaderboards() {
  return (
    <section className="px-10 pt-4">
      <div className="mx-auto mb-5 flex max-h-28 max-w-6xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
        <div className="p-4">
          <h3 className="text-3xl font-black">LEADERBOARDS</h3>
          <p className="text-sm text-white">
            Discover the top players; browse their match history, stats, and
            more.
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
      <Leaderboard />
    </section>
  );
}
