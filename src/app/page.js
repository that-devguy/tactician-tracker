/* eslint-disable @next/next/no-img-element */
import HeroBanner from "@/app/components/HeroBanner";
import Top10 from "@/app/components/Top10Leaderboard";

export default function Home() {
  return (
    <section className="lg:px-6">
      <div className="mx-auto flex h-full max-w-7xl flex-col lg:pt-8">
        <HeroBanner />
      </div>
      <div className="mx-auto mb-10 grid max-h-96 max-w-7xl grid-cols-3 grid-rows-2 gap-5">
        <div className="relative row-span-2 flex rounded-lg">
          <img
            src="set10-Promo.jpg"
            alt="Remix Rumble"
            className="rounded-lg object-cover"
          />
          <div className="via-brand-bg/65 absolute inset-0 rounded-lg bg-gradient-to-t from-brand-bg from-15% via-65% to-brand-bg/0"></div>
          <div className="absolute bottom-0 p-4">
            <p className="text-xl font-black drop-shadow-md sm:text-2xl md:text-3xl">
              WELCOME TO REMIX RUMBLE
            </p>
            <p className="text-white/50">
              New TFT Set 10, Remix Rumble, is now LIVE! Check out new
              Champions, Synergies, Items, and more.
            </p>
          </div>
        </div>
        <div className="relative flex rounded-lg bg-brand-bg">
          <img
            src="set10-Viego.jpg"
            alt="Champion Database"
            className="w-full rounded-lg object-cover"
          />
          <div className="via-brand-bg/65 absolute inset-0 rounded-lg bg-gradient-to-t from-brand-bg from-15% via-65% to-brand-bg/0"></div>

          <div className="absolute bottom-0 p-4">
            <p className="text-xl font-black drop-shadow-md sm:text-2xl md:text-3xl">
              CHAMPION DATABASE
            </p>
            <p className="text-white/50">
              Explore a database of all champions in Set 10
            </p>
          </div>
        </div>
        <div className="relative flex rounded-lg bg-brand-bg">
          <img
            src="tft-Items.jpg"
            alt="Items Database"
            className="w-full rounded-lg object-cover pb-1 grayscale"
          />
          <div className="via-brand-bg/65 absolute inset-0 rounded-lg bg-gradient-to-t from-brand-bg from-15% via-65% to-brand-bg/0"></div>
          <div className="absolute bottom-0 p-4">
            <p className="text-xs font-semibold">COMING SOON</p>
            <p className="text-xl font-black drop-shadow-md sm:text-2xl md:text-3xl">
              ITEM DATABASE
            </p>
            <p className="text-white/50">
              Explore a database of item combos in Set 10
            </p>
          </div>
        </div>
        <div className="relative col-span-2 flex rounded-lg bg-brand-bg">
          <img
            src="set10-Portals.jpg"
            alt="Set 10 Portals"
            className="w-full rounded-lg object-cover grayscale"
          />
          <div className="via-brand-bg/65 absolute inset-0 rounded-lg bg-gradient-to-t from-brand-bg from-15% via-65% to-brand-bg/0"></div>
          <div className="absolute bottom-0 p-4">
            <p className="text-xs font-semibold">COMING SOON</p>
            <p className="text-xl font-black drop-shadow-md sm:text-2xl md:text-3xl">
              META TEAM COMPS
            </p>
            <p className="text-white/50">
              The strongest and most reliable meta comps for TFT Set 10
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-5 flex max-w-7xl flex-col px-2 md:px-6 lg:px-0">
        <div className="mb-2 flex max-h-28 justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="flex flex-col justify-center px-4 py-2 md:p-4">
            <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
              TOP 10
            </h3>
            <p className="text-xs text-white md:text-sm">
              Discover the top 10 summoners NA.
            </p>
          </div>
          <img
            src="yasuo_dragonmancer_banner.png"
            alt="Dragonmancer Yasuo Chibi"
            className="w-64 select-none overflow-hidden rounded-lg"
          />
        </div>
        <div>
          <Top10 />
        </div>
      </div>
    </section>
  );
}
