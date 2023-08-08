const MatchPlacementsTile = ({ placements }) => {
  console.log(placements);

  const mapMatchHistory = (placements) => {
    const mappedPlacements = placements.map((placement, index) => {
      let placementBox = "";
      if (placement === 1) {
        placementBox = "first-placeBox";
      } else if (placement === 2) {
        placementBox = "second-placeBox";
      } else if (placement === 3) {
        placementBox = "third-placeBox";
      } else if (placement === 4) {
        placementBox = "fourth-placeBox";
      } else {
        placementBox = "bottom-placeBox";
      }

      return (
        <div
          key={index}
          className={`flex justify-center items-center h-8 w-8 rounded-md ${placementBox}`}
        >
          <div className="flex justify-center items-center h-7 w-7 rounded-md bg-brand-bg2">
            <p
              className={`text-sm font-semibold ${
                placement === 1 ? `text-white` : `text-white/50`
              }`}
            >
              {placement}
            </p>
          </div>
        </div>
      );
    });

    return mappedPlacements;
  };

  const avgPlacement = (placements) => {
    if (placements.length === 0) {
      return 0;
    }

    const sum = placements.reduce((acc, placement) => acc + placement, 0);
    const average = sum / placements.length;
    return average;
  };

  const countFirstPlace = (placements) => {
    return placements.reduce((count, placement) => {
        if (placement === 1) {
            return count + 1;
        }
        return count;
    }, 0);
  };

  const countTop4 = (placements) => {
    return placements.reduce((count, placement) => {
        if (placement >= 4) {
            return count + 1;
        }
        return count;
    }, 0);
  };

  const avgPlace = avgPlacement(placements);
  const firstPlaceCount = countFirstPlace(placements);
  const top4Count = countTop4(placements);
  const matchHistory = mapMatchHistory(placements);

  return (
    <div className="mb-3 bg-brand-bg rounded-md select-none">
      <div className="flex flex-col justify-center items-center gap-3 rounded-md">
        <div className="flex flex-col w-full px-4 divide-y divide-brand-bg3">
          <div className="flex justify-between gap-4 items-center pb-2">
            <p className="text-sm font-semibold">Match Summary</p>
            <p className="text-xs font-light text-white/40">
              last 20 ranked matches
            </p>
          </div>
          <div className="flex justify-around text-xs font-light text-white/50 pt-2">
            <div className="flex flex-col justify-center items-center w-1/3">
              <p>Avg. Place</p>
              <p className="font-normal text-lg text-white">{avgPlace}</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <p>1st Place</p>
              <p className="font-normal text-lg text-white">{firstPlaceCount}</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <p>Top4</p>
              <p className="font-normal text-lg text-white">{top4Count}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-2">{matchHistory}</div>
      </div>
    </div>
  );
};

export default MatchPlacementsTile;
