import Link from "next/link";
import SummonerSearch from "@/app/components/SummonerSearch";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 px-10 bg-brand-bg border-b-[0.5px] border-brand-bg2">
      <div className="navLogo-container flex items-center gap-10">
        <Link href="/">Tactician Tracker</Link>
        <SummonerSearch />
      </div>

      <div className="navLinks-container flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/leaderboards">Leaderboards</Link>
        <Link href="/champions">Champions</Link>
        <Link href="/items">Items</Link>
      </div>
    </nav>
  );
}
