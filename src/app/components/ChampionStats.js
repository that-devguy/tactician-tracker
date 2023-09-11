import Image from "next/image";

export default function ChampionStats() {
  return (
    <div className="mb-6 select-none rounded-md bg-brand-bg lg:mb-0">
      <div className="flex items-center gap-3 rounded-md px-4 md:px-0 lg:py-4">
        <div className="flex w-full flex-col divide-y divide-brand-bg3">
          <div className="flex items-center justify-between gap-4 pb-2">
            <p className="text-sm font-semibold">Aatrox Stats</p>
            <div className="flex gap-1 px-7">
              <Image src="/coin.svg" alt="Cost Icon" height="18" width="18" />
              <p className="text-sm font-semibold">5</p>
            </div>
          </div>
          <div className="flex justify-between pt-2 text-xs font-light text-white/50">
            {/* stats column 1 */}
            <div className="flex flex-col justify-start gap-2">
              {/* health */}
              <div className="health--container">
                <p>Health</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/health.svg"
                    alt="Health Icon"
                    height="14"
                    width="14"
                  />
                  <p className="text-sm font-normal text-white">
                    1100 / 1900 / 3564
                  </p>
                </div>
              </div>
              {/* damage */}
              <div className="damage--container">
                <p>Damage</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/damage.svg"
                    alt="Damage Icon"
                    height="14"
                    width="14"
                  />
                  <p className="text-sm font-normal text-white">
                    99 / 149 / 223
                  </p>
                </div>
              </div>
              {/* atk spd */}
              <div className="attackspeed--container">
                <p>Atk Spd</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/attack_speed.svg"
                    alt="Atk Spd Icon"
                    height="14"
                    width="14"
                  />
                  <p className="text-sm font-normal text-white">0.85</p>
                </div>
              </div>
              {/* dps */}
              <div className="dps--container">
                <p>DPS</p>
                <div className="flex items-center gap-2">
                  <Image src="/dps.svg" alt="DPS Icon" height="14" width="14" />
                  <p className="text-sm font-normal text-white">
                    84 / 127 / 190
                  </p>
                </div>
              </div>
            </div>
            {/* stats column 2 */}
            <div className="flex flex-col justify-start gap-2">
              {/* armor */}
              <div className="armor--container">
                <p>Armor</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/armor.svg"
                    alt="Armor Icon"
                    height="14"
                    width="14"
                  />
                  <p className="text-sm font-normal text-white">70</p>
                </div>
              </div>
              {/* mr */}
              <div className="mr--container">
                <p>MR</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/magic_resist.svg"
                    alt="MR Icon"
                    height="14"
                    width="14"
                  />
                  <p className="text-sm font-normal text-white">70</p>
                </div>
              </div>
              {/* mana */}
              <div className="mana--container">
                <p>Mana</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/mana.svg"
                    alt="Mana Icon"
                    height="14"
                    width="14"
                  />
                  <p className="text-sm font-normal text-white">0 / 50</p>
                </div>
              </div>
              {/* range */}
              <div className="range--container">
                <p>Range</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-normal text-white">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
