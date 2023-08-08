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
            <p className={`text-sm font-semibold ${placement === 1 ? `text-white` : `text-white/50`}`}>{placement}</p>
          </div>
        </div>
      );
    });

    return mappedPlacements;
  };

  const matchHistory = mapMatchHistory(placements);

  return (
    <div className="mb-3 bg-brand-bg rounded-md select-none">
      <div className="flex flex-col justify-center items-center gap-3 rounded-md">
        <div className="flex justify-between gap-4 items-center w-full px-4">
          <p className="text-sm font-semibold">Match Summary</p>
          <p className="text-xs font-light text-white/40">
            last 20 ranked matches
          </p>
        </div>

        <div className="grid grid-cols-10 gap-2">{matchHistory}</div>
      </div>
    </div>
  );
};

export default MatchPlacementsTile;
