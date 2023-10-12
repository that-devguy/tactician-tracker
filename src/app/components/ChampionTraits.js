import Image from "next/image";

export default function ChampionTraits({ traits }) {
  return (
    <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
      <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
        <p className="pb-2 text-sm font-semibold">Traits</p>
        <div className="flex h-full gap-4 pt-3"></div>
      </div>
    </div>
  );
}
