import Link from "next/link";
import SummonerSearch from "@/app/components/SummonerSearch";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-[0.5px] border-brand-bg2 bg-brand-bg px-10 py-5">
      <div className="navLogo-container flex items-center gap-10">
        <Link href="/" className="flex gap-2 text-lg font-bold">
          Tactician Tracker
          <span className="flex h-5 items-center justify-center rounded-md bg-brand-secondary px-2 text-xs font-black text-brand-bg">
            BETA
          </span>
        </Link>
        <SummonerSearch />
      </div>

      <div className="navLinks-container flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/leaderboards">Leaderboards</Link>
        <Link href="/champions">Champions</Link>
        <Link href="/items">Items</Link>
      </div>
    </nav>
  );
}
