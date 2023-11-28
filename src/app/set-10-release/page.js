import Image from "next/image";
import getUnitData from "@/app/libs/getUnitData";
import getTraitsData from "@/app/libs/getTraitsData";

export default async function Set10Release() {
  const mutator = "TFTSet10";
  const unitData = await getUnitData(mutator);
  const traitData = await getTraitsData(mutator);

  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col lg:pt-8">
      <div className="relative flex min-h-[16rem] select-none justify-center md:max-h-[28rem] lg:rounded-lg">
        <Image
          src="/remix-rumble.png"
          height="204"
          width="477"
          alt="Remix Rumble Logo"
          className="absolute z-20 max-w-xs pt-24 drop-shadow-lg md:max-w-none"
        />
        <Image
          src="/set10-Promo.jpg"
          height="1298"
          width="2560"
          alt="Remix Rumble Promo"
          className="rounded-lg object-cover object-top"
        />
        <div className="via-brand-bg/65 absolute inset-0 rounded-md bg-gradient-to-t from-brand-bg from-15% to-brand-bg/10"></div>
      </div>
      <div className="flex flex-col px-4 sm:items-center sm:justify-center">
        <h1 className="mb-3 text-center text-2xl font-black drop-shadow-md sm:text-4xl md:text-5xl">
          WELCOME TO <br />
          <span className="text-3xl text-brand-secondary sm:text-5xl md:text-6xl">
            REMIX RUMBLE
          </span>
        </h1>
        <h2 className="text-sm text-white/50 sm:w-2/3 sm:text-center">
          Remix Rumble marks the tenth installment in Teamfight Tactics,
          introducing a smorgasbord of changes that mix it up. These include a
          fresh interpretation of the chosen mechanic, an innovative immersive
          music system, and various other enhancements.
        </h2>
      </div>

      {/* Systems Sections */}
      <section className="px-2 pt-8 md:px-6 lg:px-6">
        <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="flex flex-col justify-center px-4 py-2 md:p-4">
            <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
              SYSTEMS
            </h3>
            <p className="text-sm text-white sm:hidden">
              Detailed breakdown of new mechanics
            </p>
            <p className="hidden text-sm text-white sm:block md:text-sm">
              Detailed breakdown of set 10 mechanics including, Headliner,
              Portals, Leveling, and more.
            </p>
          </div>
          <Image
            src="/teemo_base_banner.png"
            height="200"
            width="200"
            alt="Base Teemo Chibi"
            className="h-fill select-none overflow-hidden"
          />
        </div>
        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">
            Ranked Changes
          </h4>
          <p className="pt-2 text-sm text-white/50 md:text-sm">
            In the this new set, climbing in the lower ranks up to Platinum will
            be slightly easier and faster. Higher ranks may take longer due to a
            longer season with no mid-set reset, and adjustments are made to fit
            the new season length, though not in a 1:1 ratio. <br />
            <br /> Emerald tier has officially arrived to TFT! Players will now
            progress from Platinum to Emerald before moving on to Diamond tier.{" "}
          </p>
        </div>
        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">
            Headliner
          </h4>
          <p className="pt-2 text-sm text-white/50 md:text-sm">
            2-star Headliners can be purchased from the shop with an additional
            plus one to one of their traits, along with a unique bonus.
            <br />
            <br />A Headliner will appear in every shop when the player does not
            have a Headliner and only once in every four shops when they do have
            a Headliner. A player can only have one Headliner at a time,
            requiring you to sell your current Headliner before purchasing a new
            one. Now, the good thing about this is that Headliners have a small
            amount of bad luck protection built in, meaning you won&apos;t see
            the same ones showing up in your shops consecutively.{" "}
          </p>
          <Image
            src="/headliner-nami.png"
            height="1298"
            width="2560"
            alt="Headliner Nami"
            className="mx-auto my-4 w-full max-w-3xl rounded-lg object-cover object-top"
          />
        </div>

        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">Portals</h4>
          <p className="pt-2 text-sm text-white/50 md:text-sm">
            Protals are back! This time they are toned down a bit. Players will
            vote for 1 of 3 Portals at the start of the game to modify the
            rules. Portal categories are Augments, Gold, Champions, Items,
            Combat, Unique, and Headliner.
          </p>
        </div>
        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">
            Leveling Changes
          </h4>
          <div className="flex flex-col gap-2 pt-2 text-sm text-white/50 md:text-sm">
            Fast 10? Level 10 is now the max level. No augment needed!
            <li>Level 5 to 6: 24 ⇒ 20xp</li>
            <li>Level 6 to 7: 40 ⇒ 36xp</li>
            <li>Level 7 to 8: 60 ⇒ 48xp</li>
            <li>Level 8 to 9: 84 ⇒ 80xp</li>
            <li>Level 9 to 10: 100 ⇒ 84xp</li>
            <li>Total XP need to hit max: 228 ⇒ 288</li>
          </div>
        </div>
      </section>

      {/* Traits Section */}
      <section className="px-2 pt-8 md:px-6 lg:px-6">
        <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="flex flex-col justify-center px-4 py-2 md:p-4">
            <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
              TRAITS
            </h3>
            <p className="text-sm text-white">
              Detailed breakdown of set 10 Traits
            </p>
          </div>
          <Image
            src="/teemo_base_banner.png"
            height="200"
            width="200"
            alt="Base Teemo Chibi"
            className="h-fill select-none overflow-hidden"
          />
        </div>
        {/* Traits Grid */}
        <div className="grid gap-3 py-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Trait Container*/}
          {traitData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((trait) => (
              <div
                key={trait.name}
                className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4"
              >
                <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
                  <div className="flex items-start gap-3">
                    <Image
                      className={`green-filter z-10 pb-2`}
                      src={`https://raw.communitydragon.org/latest/game/${trait.icon
                        .replace(".tex", ".png")
                        .toLowerCase()}`}
                      alt={trait.name}
                      height="26"
                      width="26"
                    />
                    <p className="text-base font-semibold lg:text-lg">
                      {trait.name}
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                      {trait.desc}
                    </p>
                    {/* Trait Count List */}
                    <ul className="flex flex-col gap-2 pt-4">
                      <li className="flex items-center gap-2">
                        <span className="w-fit rounded-md bg-brand-bg px-2">
                          2
                        </span>
                        <p className="text-xs text-white/50 lg:text-sm">
                          10% Attack Damage, 40% after casting
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-fit rounded-md bg-brand-bg px-2">
                          4
                        </span>
                        <p className="text-xs text-white/50 lg:text-sm">
                          15% Attack Damage, 60% after casting
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-fit rounded-md bg-brand-bg px-2">
                          6
                        </span>
                        <p className="text-xs text-white/50 lg:text-sm">
                          25% Attack Damage, 100% after casting
                        </p>
                      </li>
                    </ul>
                    {/* Champion List */}
                    <ul className="flex gap-2 pt-4">
                      {unitData
                        .filter(
                          (unit) =>
                            unit.traits.includes(trait.name) &&
                            unit.apiName !== "TFT10_YorickGhoulMelee" &&
                            unit.apiName !== "TFT10_DiscoBall"
                        )
                        .sort((a, b) => a.cost - b.cost)
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
                            <li
                              key={unit.apiName}
                              href={`/champions/${unit.name.toLowerCase()}`}
                              className="my-1 w-11 flex-col items-center justify-center md:w-12"
                            >
                              <Image
                                className={`mx-auto rounded-full md:mb-2 ${costColor}`}
                                src={`https://raw.communitydragon.org/latest/game/${unit.icon
                                  .replace(".tex", ".png")
                                  .replace(".dds", ".png")
                                  .toLowerCase()}`}
                                alt={unit.name}
                                height="40"
                                width="40"
                              />
                              <p className="hidden truncate text-center text-xs md:block">
                                {unit.name}
                              </p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
