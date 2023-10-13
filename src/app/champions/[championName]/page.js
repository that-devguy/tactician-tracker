import Image from "next/image";
import Link from "next/link";
import getUnitData from "@/app/libs/getUnitData";
import getTraitsData from "@/app/libs/getTraitsData";
import ChampionStats from "@/app/components/ChampionStats";
import ChampionAbility from "@/app/components/ChampionAbility";
import ChampionTraits from "@/app/components/ChampionTraits";

export default async function Champion({ params: { championName } }) {
  const mutator = "TFTSet9_Stage2";
  const unitData = await getUnitData(mutator);
  const traitData = await getTraitsData(mutator);
  console.log(championName);
  const selectedChampion = unitData.find(
    (champion) => champion.name.toLowerCase() === championName
  );
  console.log(selectedChampion);

  if (selectedChampion) {
    const traitNames = selectedChampion.traits || [];

    const traits = traitData.filter((trait) => traitNames.includes(trait.name));
    console.log(traits);

    const icon = selectedChampion.icon.replace(".tex", ".png");
    const bg = selectedChampion.bg.replace(".tex", ".png");

    let costColor = "";

    if (selectedChampion.cost === 1) {
      costColor = "one-costChamp";
    } else if (selectedChampion.cost === 2) {
      costColor = "two-costChamp";
    } else if (selectedChampion.cost === 3) {
      costColor = "three-costChamp";
    } else if (selectedChampion.cost === 4) {
      costColor = "four-costChamp";
    } else {
      costColor = "five-costChamp";
    }

    const unitsWithMatchingTraits = unitData.filter((unit) =>
      unit.traits.some((unitTrait) => traitNames.includes(unitTrait))
    );

    console.log(unitsWithMatchingTraits);

    return (
      <section className="mx-auto max-w-7xl px-2 pt-4 text-lg md:px-10 md:pt-8">
        <div className="profile-headerCard flex w-full flex-col items-center gap-1 p-2 md:flex-row md:gap-5 md:p-4">
          <div></div>
          <div className="flex flex-col justify-center py-2">
            <Image
              className={`select-none rounded-full border-4 border-transparent ${costColor}`}
              src={`https://raw.communitydragon.org/latest/game/${icon.toLowerCase()}`}
              alt={selectedChampion.name}
              height="100"
              width="100"
            />
          </div>
          <div className="flex flex-col items-center gap-1 md:items-start">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold md:text-4xl">
                {selectedChampion.name}
              </h1>
            </div>
            <div className="flex gap-2 text-[.6rem] font-black leading-[.8rem] text-brand-bg md:gap-2 md:text-xs">
              {/* Traits */}
              {traits.map((trait) => (
                <div
                  key={trait.name}
                  className={`h-fit w-fit rounded-full bg-brand-secondary p-1`}
                >
                  <Image
                    className={`z-10 invert`}
                    src={`https://raw.communitydragon.org/latest/game/${trait.icon
                      .replace(".tex", ".png")
                      .toLowerCase()}`}
                    alt={trait.name}
                    height="20"
                    width="20"
                  />
                </div>
              ))}
            </div>
          </div>
          <Image
            className={`select none`}
            src={`https://raw.communitydragon.org/latest/game/${bg.toLowerCase()}`}
            alt={selectedChampion.name}
            height="128"
            width="256"
          />
        </div>
        <div>
          <div className="md:m-w-none mx-auto max-w-lg py-3 md:mx-0 md:w-8/12 md:px-2 lg:flex lg:w-full lg:max-w-7xl lg:gap-10">
            <div className="lg:w-1/2">
              <ChampionStats selectedChampion={selectedChampion} />
            </div>
            <div className="flex lg:w-1/2">
              <ChampionAbility selectedChampion={selectedChampion} />
            </div>
          </div>
          <div className="md:m-w-none mx-auto mb-6 max-w-lg pb-3 md:mx-0 md:w-8/12 md:px-2 lg:flex lg:w-full lg:max-w-7xl lg:gap-10">
            <ChampionTraits traits={traits} units={unitsWithMatchingTraits} />
          </div>
        </div>
      </section>
    );
  } else {
    console.log("Champion not found");
    return <div>Champion not found</div>;
  }
}
