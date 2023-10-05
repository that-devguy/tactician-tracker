const getUnitData = async (mutator) => {
  try {
    const res = await fetch(
      `https://raw.communitydragon.org/latest/cdragon/tft/en_us.json`,
      { next: { revalidate: 3600 } }
    );
    const cdData = await res.json();

    if (!cdData.setData) {
      throw new Error("No setData found in the fetched data");
    }

    const setData = cdData.setData.find((set) => set.mutator === mutator);

    if (!setData || !setData.champions) {
      throw new Error("The desired mutator was not found or had no champions");
    }

    const champions = setData.champions.map((champion) => ({
      apiName: champion.apiName,
      name: champion.name,
      cost: champion.cost,
      traits: champion.traits,
      stats: champion.stats,
      ability: champion.ability,
      icon: champion.tileIcon,
    }));

    return champions;
  } catch (error) {
    console.error("Error fetching or filtering champion data:", error);
    throw error;
  }
};
export default getUnitData;
