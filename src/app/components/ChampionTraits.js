import Image from "next/image";

export default function ChampionTraits({ traits, units }) {
  return (
    <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
      <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
        <p className="pb-2 text-sm font-semibold">Traits</p>
        <div className="flex flex-col divide-y divide-brand-bg3 py-3">
          {traits.map((trait) => (
            <div key={trait.name} className={`flex flex-col gap-2 py-3`}>
              <div className="flex items-center gap-3">
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
              <div className="flex flex-wrap gap-2">
                {units
                  .filter((unit) => unit.traits.includes(trait.name))
                  .map((unit) => {
                    let costColor = "";

                    if (unit.cost === 1) {
                      costColor = "one-cost";
                    } else if (unit.cost === 2) {
                      costColor = "two-cost";
                    } else if (unit.cost === 3) {
                      costColor = "three-cost";
                    } else if (unit.cost === 4) {
                      costColor = "four-cost";
                    } else if (unit.cost === 5) {
                      costColor = "five-cost";
                    } else {
                      costColor = "random-cost";
                    }

                    return (
                      <div
                        key={unit.apiName}
                        className="my-1 w-11 flex-col items-center justify-center md:w-12"
                      >
                        <Image
                          className={`mx-auto rounded-full md:mb-2 ${costColor}`}
                          src={`https://raw.communitydragon.org/latest/game/${unit.icon
                            .replace(".tex", ".png")
                            .toLowerCase()}`}
                          alt={unit.name}
                          height="40"
                          width="40"
                        />
                        <p className="hidden truncate text-center text-xs md:block">
                          {unit.name}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
