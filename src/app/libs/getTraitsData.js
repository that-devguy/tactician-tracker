const getTraitsData = async (mutator) => {
  try {
    const res = await fetch(
      `https://raw.communitydragon.org/latest/cdragon/tft/en_us.json`,
      {
        cache: "no-store",
      }
    );
    const cdData = await res.json();

    if (!cdData.setData) {
      throw new Error("No setData found in the fetched data");
    }

    const setData = cdData.setData.find((set) => set.mutator === mutator);

    if (!setData || !setData.traits) {
      throw new Error("The desired mutator was not found or had no traits");
    }

    const traits = setData.traits.map((trait) => ({
      apiName: trait.apiName,
      name: trait.name,
      icon: trait.icon,
      desc: trait.desc,
    }));

    return traits;
  } catch (error) {
    console.error("Error fetching or filtering trait data:", error);
    throw error;
  }
};

export default getTraitsData;
