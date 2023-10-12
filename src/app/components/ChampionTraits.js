import Image from "next/image";

export default function ChampionTraits({ traits }) {
  return (
    <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
      <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
        <p className="pb-2 text-sm font-semibold">Traits</p>
        <div className="flex flex-col divide-y divide-brand-bg3 py-3">
          {traits.map((trait) => (
            <div key={trait.name} className={`flex flex-col py-3 gap-2`}>
              <div className="flex items-center gap-2">
                <Image
                  className={`green-filter z-10`}
                  src={`https://raw.communitydragon.org/latest/game/${trait.icon
                    .replace(".tex", ".png")
                    .toLowerCase()}`}
                  alt={trait.name}
                  height="28"
                  width="28"
                />

                <p className="text-sm font-semibold lg:text-lg">{trait.name}</p>
              </div>
              <div className="flex w-fit flex-col justify-between gap-2">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  {trait.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
