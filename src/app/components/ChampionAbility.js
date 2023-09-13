import Image from "next/image";

export default function ChampionAbility({ selectedChampion }) {
  const abilityIcon = selectedChampion.ability.icon.replace(".dds", ".png");

  return (
    <div className="mx-auto mb-2 flex max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
      <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
        <p className="pb-2 text-sm font-semibold">Ability</p>
        <div className="flex h-full gap-4 pt-3">
          <Image
            className="w-50 h-fit select-none border border-white"
            src={`https://raw.communitydragon.org/latest/game/${abilityIcon.toLowerCase()}`}
            alt={`Aatrox`}
            height="50"
            width="50"
          />
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold lg:text-lg">
                {selectedChampion.ability.name}
              </p>
              <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                {selectedChampion.ability.desc}
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
