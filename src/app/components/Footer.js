import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col divide-y divide-brand-bg3 px-10 py-5">
      <div className="flex justify-between pb-5">
        <div className="flex w-1/2 flex-col gap-5">
          <Link href="/" className="flex w-fit gap-2 text-lg font-bold">
            Tactician Tracker
            <span className="flex h-5 items-center justify-center rounded-md bg-brand-secondary px-2 text-xs font-black text-brand-bg">
              BETA
            </span>
          </Link>

          <p className="text-sm text-white/50">
            This app is a playground for my coding journey, where I&apos;m
            constantly learning and improving my development skills. As of now,
            it&apos;s a work in progress, but stay tuned for exciting updates,
            new features, bug fixes, and more in future releases. Thank you for
            joining me on this journey of growth and innovation!
          </p>
          <p className="text-sm">
            Made with{" "}
            <FontAwesomeIcon
              className="text-sm text-brand-secondary"
              icon={faHeart}
            />{" "}
            by{" "}
            <Link
              href="https://www.thatdevguy.app/"
              target="_blank"
              className="hover:text-brand-main"
            >
              that_devguy
              <FontAwesomeIcon
                className="mb-1 ml-1 text-xs"
                icon={faArrowUpRightFromSquare}
              />
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/50">
          <p className="text-base font-semibold text-white">Site Links</p>
          <Link className="hover:text-brand-main" href="/">
            Home
          </Link>
          <Link className="hover:text-brand-main" href="/leaderboards">
            Leaderboards
          </Link>
          <Link className="hover:text-brand-main" href="/champions">
            Champions
          </Link>
          <Link className="hover:text-brand-main" href="/items">
            Items
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/50">
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
      <div className="flex flex-col gap-3 py-5 text-sm text-white/50">
        <p className="">
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
