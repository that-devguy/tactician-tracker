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
          className={`flex h-8 w-8 items-center justify-center rounded-md ${placementBox}`}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-bg2">
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
    <div className="mb-3 select-none rounded-md bg-brand-bg">
      <div className="flex flex-col items-center justify-center gap-3 rounded-md">
        <div className="flex w-full flex-col divide-y divide-brand-bg3 px-4">
          <div className="flex items-center justify-between gap-4 pb-2">
            <p className="text-sm font-semibold">Match Summary</p>
            <p className="text-xs font-light text-white/40">
              last 20 ranked matches
            </p>
          </div>
          <div className="flex justify-around pt-2 text-xs font-light text-white/50">
            <div className="flex w-1/3 flex-col items-center justify-center">
              <p>Avg. Place</p>
              <p className="text-lg font-normal text-white">{avgPlace}</p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center">
              <p>1st Place</p>
              <p className="text-lg font-normal text-white">
                {firstPlaceCount}
              </p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center">
              <p>Top4</p>
              <p className="text-lg font-normal text-white">{top4Count}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-2">{matchHistory}</div>
      </div>
    </div>
  );
};

export default MatchPlacementsTile;
