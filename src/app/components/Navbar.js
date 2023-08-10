import Link from "next/link";
import SummonerSearch from "@/app/components/SummonerSearch";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-[0.5px] border-brand-bg2 bg-brand-bg px-10 py-5">
      <div className="navLogo-container flex items-center gap-10">
        <Link href="/" className="text-lg font-bold">
          Tactician Tracker
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
