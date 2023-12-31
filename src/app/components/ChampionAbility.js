import Image from "next/image";

function resolveVariables(abilityDesc, variables) {
  return abilityDesc.replace(/@(\w+)@/g, (match, variableName) => {
    const variable = variables.find((v) => v.name === variableName);
    if (variable) {
      return variable.value[1];
    }
    return match;
  });
}

export default function ChampionAbility({ selectedChampion }) {
  const abilityIcon = selectedChampion.ability.icon.replace(".dds", ".png");
  // console.log(selectedChampion.ability, selectedChampion.ability.variables);

  const resolvedDesc = resolveVariables(
    selectedChampion.ability.desc,
    selectedChampion.ability.variables
  );

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
                {resolvedDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
