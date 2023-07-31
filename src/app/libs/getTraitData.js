const getTraitData = async () => {
  try {
    const res = await fetch(
      `https://raw.communitydragon.org/latest/cdragon/tft/en_us.json`,
      {
        cache: "no-store",
      }
    );
    const cdData = await res.json();
    let traitData = [];

    if (cdData.items) {
      traitData = cdData.items.map((traitData) => ({
        apiName: traitData.apiName,
        name: traitData.name,
        icon: traitData.icon,
      }));
    }

    return traitData;
  } catch (error) {
    console.error("Error fetching or filtering trait data:", error);
  }
};

export default getTraitData;
