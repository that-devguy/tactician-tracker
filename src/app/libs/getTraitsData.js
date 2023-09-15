const getTraitsData = async (tft_set_number) => {
  try {
    const res = await fetch(
      `https://raw.communitydragon.org/latest/cdragon/tft/en_us.json`,
      {
        cache: "no-store",
      }
    );
    const cdData = await res.json();
    let traitData = [];

    if (cdData.sets && cdData.sets[tft_set_number]) {
      traitData = cdData.sets[tft_set_number].traits.map((traitData) => ({
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

export default getTraitsData;
