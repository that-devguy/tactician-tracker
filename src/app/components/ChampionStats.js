import Image from "next/image";

export default function ChampionStats() {
  return (
    <div className="mb-3 select-none rounded-md bg-brand-bg">
      <div className="flex items-center gap-3 rounded-md px-4 md:px-0">
        Stats:
        <Image src="/health.svg" alt="Health Icon" height="14" width="14" />
      </div>
    </div>
  );
}
