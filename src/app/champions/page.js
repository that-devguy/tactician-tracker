"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import getUnitData from "@/app/libs/getUnitData";
import getTraitsData from "@/app/libs/getTraitsData";
import CostFilter from "@/app/components/CostFilter";

export default function Champions() {
  const [unitData, setUnitData] = useState([]);
  const mutator = "TFTSet9_Stage2";
  const [selectedCost, setSelectedCost] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const data = await getUnitData(mutator);
      setUnitData(data);
    }

    fetchData();
  }, []);
  const filteredUnits = unitData
    .filter(
      (champion) =>
        champion.cost < 6 &&
        champion.name !== "Voidspawn" &&
        champion.name !== "Target Dummy" &&
        !/^TFT9_Ryze.+/.test(champion.apiName)
    )
    .filter(
      (champion) =>
        selectedCost === "all" || champion.cost.toString() === selectedCost
    );

  const units = filteredUnits.sort((a, b) => a.name.localeCompare(b.name));

  const handleCostChange = (value) => {
    setSelectedCost(value);
    console.log(selectedCost);
  };

  return (
    <section className="select-none px-2 pt-8 md:px-6 lg:px-6">
      <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
        <div className="flex flex-col justify-center px-4 py-2 md:p-4">
          <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
            CHAMPIONS
          </h3>
          <p className="text-xs text-white sm:hidden">
            Explore a database of all the Champions in the current set.
          </p>
          <p className="hidden text-xs text-white sm:block md:text-sm">
            Explore a database of all the Champions in the current set: their
            origins, classes, and costs
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
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 lg:flex-row lg:py-8">
        <div className="mb-2 flex flex-col rounded-md bg-brand-bg2 p-4 md:p-4 lg:w-1/3">
          <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
            <div className="flex justify-between px-1">
              <p className="pb-2 text-sm font-semibold">Filters</p>
              <p className="pb-2 text-sm">Reset</p>
            </div>
            <div className="flex h-full gap-4 pt-3">
              <CostFilter
                selectedCost={selectedCost}
                onCostChange={handleCostChange}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-wrap justify-center gap-6 lg:w-2/3 lg:justify-start">
          {units.map((champion) => {
            let costColor = "";

            if (champion.cost === 1) {
              costColor = "one-cost";
            } else if (champion.cost === 2) {
              costColor = "two-cost";
            } else if (champion.cost === 3) {
              costColor = "three-cost";
            } else if (champion.cost === 4) {
              costColor = "four-cost";
            } else {
              costColor = "five-cost";
            }

            const icon = champion.icon.replace(".tex", ".png");

            return (
              <Link
                href={`/champions/${champion.name.toLowerCase()}`}
                key={champion.name}
                className="flex w-16 flex-col items-center justify-center"
              >
                <Image
                  src={`https://raw.communitydragon.org/latest/game/${icon.toLowerCase()}`}
                  alt={`${champion.name} icon`}
                  height="75"
                  width="75"
                  className={`rounded-md ${costColor}`}
                />
                <p className="mt-2 w-full truncate text-center text-xs">
                  {champion.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
