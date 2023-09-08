import Image from "next/image";

export default function ChampionAbility() {
  return (
    <div className="mx-auto mb-2 flex max-w-lg select-none flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
      <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
        <p className="pb-2 text-sm font-semibold">Ability</p>
        <div className="flex h-full gap-4 pt-3">
          <Image
            className="w-50 h-fit border border-white"
            src={`https://raw.communitydragon.org/latest/game/assets/characters/tft9_aatrox/hud/icons2d/tft9_aatrox_r.tft_set9.png`}
            alt={`Aatrox`}
            height="50"
            width="50"
          />
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold lg:text-lg">World Ender</p>
              <p className="text-xs text-white/50 lg:text-sm lg:pr-5">
                Aatrox transforms for 12 seconds, gaining Omnivamp and
                converting all bonus Attack Speed to Attack Damage. While
                transformed, attacks deal physical damage.
              </p>
            </div>
            <p className="text-sm text-brand-main">
              Damage: 275% / 275% / 2500%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
