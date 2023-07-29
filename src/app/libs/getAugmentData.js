const getAugmentData = async () => {
    try {
      const res = await fetch(
        `https://raw.communitydragon.org/latest/cdragon/tft/en_us.json`,
        {
          cache: "no-store",
        }
      );
      const cdData = await res.json();
      let augments = [];
  
      if (cdData.items) {
        augments = cdData.items.map((augment) => ({
          apiName: augment.apiName,
          name: augment.name,
          icon: augment.cost,
          desc: augment.desc,
        }));
      }
  
      return augments;
    } catch (error) {
      console.error("Error fetching or filtering augment data:", error);
    }
  };
  
  export default getAugmentData;