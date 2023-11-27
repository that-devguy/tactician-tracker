/* eslint-disable @next/next/no-img-element */
import HeroBanner from "@/app/components/HeroBanner";
import Image from "next/image";
import Top10 from "@/app/components/Top10Leaderboard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="lg:px-6">
      <div className="mx-auto flex h-full max-w-7xl flex-col lg:pt-8">
        <HeroBanner />
      </div>
      <div className="mx-auto mb-2 grid max-h-96 max-w-7xl grid-cols-1 grid-rows-2 gap-2 px-2 sm:mb-5 sm:grid-cols-2 sm:grid-rows-1 md:mb-10 md:grid-cols-3 md:grid-rows-2 md:gap-3 md:px-6 lg:px-0">
        <Link
          href="/set-10-release"
          className="group relative flex rounded-lg md:row-span-2"
        >
          <img
            src="set10-Promo.jpg"
            alt="Remix Rumble"
            className="w-full rounded-lg object-cover object-top md:object-left"
          />
          <div className="via-brand-bg/65 absolute inset-0 rounded-lg bg-gradient-to-t from-brand-bg from-15% via-65% to-brand-bg/0"></div>
          <div className="absolute bottom-0 p-2 md:p-4">
            <p className="text-2xl font-black drop-shadow-md group-hover:text-brand-secondary md:text-3xl">
              WELCOME TO <br /> REMIX RUMBLE
              <FontAwesomeIcon
                className="visible mb-1 ml-1 text-xs group-hover:visible md:invisible md:mb-3"
                icon={faArrowUpRightFromSquare}
              />
            </p>
            <p className="text-sm text-white/50 md:text-base">
              New TFT Set 10, Remix Rumble, is now LIVE! Check out new
              Champions, Synergies, Items, and more.
            </p>
            <p className="mt-2 hidden text-xs font-semibold md:flex">
              NOV 21, 2023
            </p>
          </div>
        </Link>
        <Link
          href="/champions"
          className="group relative flex rounded-md bg-brand-bg"
        >
          <img
            src="set10-Viego.jpg"
            alt="Champion Database"
            className="w-full rounded-lg object-cover object-top"
          />
          <div className="via-brand-bg/65 absolute inset-0 rounded-lg bg-gradient-to-t from-brand-bg from-15% via-65% to-brand-bg/0"></div>

          <div className="absolute bottom-0 p-4">
            <p className="text-2xl font-black drop-shadow-md group-hover:text-brand-secondary md:text-3xl">
              CHAMPION <br />DATABASE
              <FontAwesomeIcon
                className="visible mb-1 ml-1 text-xs group-hover:visible md:invisible md:mb-3"
                icon={faArrowUpRightFromSquare}
              />
            </p>
            <p className="text-sm text-white/50 md:text-base">
              Explore a database of all champions in Set 10
            </p>
          </div>
        </Link>
        <div className="relative hidden rounded-lg bg-brand-bg md:flex">
          <img
            src="tft-Items.jpg"
            alt="Items Database"
            className="w-full rounded-lg object-cover pb-1 grayscale"
          />
          <div className="via-brand-bg/65 absolute inset-0 rounded-lg bg-gradient-to-t from-brand-bg from-15% via-65% to-brand-bg/0"></div>
          <div className="absolute bottom-0 p-4">
            <p className="text-xs font-semibold">COMING SOON</p>
            <p className="text-xl font-black drop-shadow-md sm:text-2xl md:text-3xl">
              ITEM <br />DATABASE
            </p>
            <p className="text-white/50">
              Explore a database of item combos in Set 10
            </p>
          </div>
        </div>
        <div className="relative hidden rounded-lg bg-brand-bg md:col-span-2 md:flex">
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
          <Image
            src="/yasuo_dragonmancer_banner.png"
            height="200"
            width="200"
            alt="Dragonmancer Yasuo Chibi"
            className="h-fill select-none overflow-hidden rounded-lg"
          />
        </div>
        <div>
          <Top10 />
        </div>
      </div>
    </section>
  );
}
