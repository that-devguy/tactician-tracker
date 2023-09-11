import Image from "next/image";
import Link from "next/link";
import getUnitData from "@/app/libs/getUnitData";


export default async function Champions() {
  const tft_set_number = 9;
  const unitData = await getUnitData(tft_set_number);
  const filteredUnits = unitData.filter(
    (champion) =>
      champion.cost < 6 &&
      champion.name !== "Voidspawn" &&
      champion.name !== "Target Dummy" &&
      !/^TFT9_Ryze.+/.test(champion.apiName)
  );
  console.log(unitData);

  return (
    <section className="px-2 pt-8 md:px-6 lg:px-6">
      <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
        <div className="flex flex-col justify-center px-4 py-2 md:p-4">
          <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
            CHAMPIONS
          </h3>
          <p className="text-xs text-white sm:hidden">
            Explore a database of all the Champions in Set 9.
          </p>
          <p className="hidden text-xs text-white sm:block md:text-sm">
            Explore a database of all the Champions in Set 9: their origins,
            classes, and costs
          </p>
        </div>
        <Image
          src="/lux_stargaurdian_banner.png"
          height="200"
          width="200"
          alt="Stargaurdian Lux Chibi"
          className="h-fill select-none overflow-hidden rounded-lg"
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 py-8">
        {filteredUnits.map((champion) => (
          <Link
            href={`/champions/${champion.name.toLowerCase()}`}
            key={champion.name}
            className="flex w-16 flex-col items-center justify-center"
          >
            <Image
              src={`https://raw.communitydragon.org/latest/game/assets/characters/${champion.apiName.toLowerCase()}/hud/${champion.apiName.toLowerCase()}_square.tft_set${tft_set_number}.png`}
              alt={`${champion.name} icon`}
              height="75"
              width="75"
            />
            <p className="mt-1 w-full truncate text-center text-xs">
              {champion.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
