import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col divide-y divide-brand-bg3 px-4 py-5 md:px-10">
      <div className="flex justify-between pb-5">
        <div className="flex flex-col gap-2 md:w-1/2 md:gap-5">
          <Link href="/" className="flex gap-2 text-lg font-bold">
            Tactician Tracker
            <span className="flex h-4 items-center justify-center rounded-[.25rem] bg-brand-secondary px-2 text-[.6rem] font-black text-brand-bg md:h-5 md:rounded-md md:text-xs">
              BETA
            </span>
          </Link>

          <p className="mb-2 pr-6 text-sm text-white/50">
            This app is a playground for my coding journey, where I&apos;m
            constantly learning and improving my development skills. As of now,
            it&apos;s a work in progress, but stay tuned for exciting updates,
            new features, bug fixes, and more in future releases. Thank you for
            joining me on this journey of growth and innovation!
          </p>

          {/* Mobile Footer Link Container */}
          <div className="mobileFooter-links mb-3 flex gap-8 md:hidden">
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <p className="text-base font-semibold text-white">Site Links</p>
              <Link className="hover:text-brand-main" href="/">
                Home
              </Link>
              <Link className="hover:text-brand-main" href="/leaderboards">
                Leaderboards
              </Link>
              <Link
                className="flex gap-1 hover:text-brand-main"
                href="/champions"
              >
                Champs
                <div className="flex h-4 flex-col justify-center text-[.4rem] font-semibold leading-[.4rem] text-brand-secondary md:h-5 md:rounded-md md:text-[.6rem] md:text-xs">
                  <p>COMING</p>
                  <p>SOON</p>
                </div>
              </Link>

              <Link className="flex gap-1 hover:text-brand-main" href="/items">
                Items
                <div className="flex h-4 flex-col justify-center text-[.4rem] font-semibold leading-[.4rem] text-brand-secondary md:h-5 md:rounded-md md:text-[.6rem] md:text-xs">
                  <p>COMING</p>
                  <p>SOON</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-sm text-white/50 md:hidden">
              <p className="text-base font-semibold text-white">
                Connect With Me
              </p>
              <Link
                className="hover:text-brand-main"
                href="https://www.linkedin.com/in/zachmutch/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                className="hover:text-brand-main"
                href="https://github.com/that-devguy"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                className="hover:text-brand-main"
                href="https://www.thatdevguy.app/"
                target="_blank"
              >
                Portfolio
              </Link>
            </div>
          </div>

          <p className="text-xs md:text-sm">
            Made with{" "}
            <FontAwesomeIcon
              className="text-sm text-brand-secondary"
              icon={faHeart}
            />{" "}
            by{" "}
            <Link
              href="https://www.thatdevguy.app/"
              target="_blank"
              className="underline hover:text-brand-main md:no-underline"
            >
              that_devguy
              <FontAwesomeIcon
                className="mb-1 ml-1 text-xs"
                icon={faArrowUpRightFromSquare}
              />
            </Link>
          </p>
        </div>

        {/* Site Links */}
        <div className="hidden flex-col gap-2 text-sm text-white/50 md:flex">
          <p className="text-base font-semibold text-white">Site Links</p>
          <Link className="hover:text-brand-main" href="/">
            Home
          </Link>
          <Link className="hover:text-brand-main" href="/leaderboards">
            Leaderboards
          </Link>
          <Link className="flex gap-1 hover:text-brand-main" href="/champions">
            Champions
            <span className="flex h-4 items-center justify-center text-[.6rem] font-semibold text-brand-secondary md:h-5 md:rounded-md">
              COMING SOON
            </span>
          </Link>
          <Link className="flex gap-1 hover:text-brand-main" href="/items">
            Items
            <span className="flex h-4 items-center justify-center text-[.6rem] font-semibold text-brand-secondary md:h-5 md:rounded-md">
              COMING SOON
            </span>
          </Link>
        </div>

        <div className="hidden flex-col gap-2 text-sm text-white/50 md:flex">
          <p className="text-base font-semibold text-white">Connect With Me</p>
          <Link
            className="hover:text-brand-main"
            href="https://www.linkedin.com/in/zachmutch/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="hover:text-brand-main"
            href="https://github.com/that-devguy"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="hover:text-brand-main"
            href="https://www.thatdevguy.app/"
            target="_blank"
          >
            Portfolio
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-5 text-xs font-light text-white/50 md:text-sm">
        <p className="pr-6 md:pr-0">
          Tactician Tracker isn&apos;t endorsed by Riot Games and doesn&apos;t
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing Riot Games properties. Riot Games,
          and all associated properties are trademarks or registered trademarks
          of Riot Games, Inc.
        </p>
        <p>Copyright &copy; 2023. Tactician Tracker</p>
      </div>
    </footer>
  );
}
