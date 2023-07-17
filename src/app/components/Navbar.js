import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="navLogo-container">
        <Link href="/">Tactician Tracker</Link>
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
