const getUnitData = async (tft_set_number) => {
  try {
    const res = await fetch(
      `https://raw.communitydragon.org/latest/cdragon/tft/en_us.json`,
      { next: { revalidate: 3600 } }
    );
    const cdData = await res.json();
    let champions = [];

    if (cdData.sets && cdData.sets[tft_set_number]) {
      champions = cdData.sets[tft_set_number].champions.map((champion) => ({
        apiName: champion.apiName,
        name: champion.name,
        cost: champion.cost,
        traits: champion.traits,
        stats: champion.stats,
        ability: champion.ability,
      }));
    }

    return champions;
  } catch (error) {
    console.error("Error fetching or filtering champion data:", error);
  }
};

export default getUnitData;
