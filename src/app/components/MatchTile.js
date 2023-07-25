import Image from "next/image";

const getUnitData = async (tft_set_number) => {
  try {
    const res = await fetch(
      `https://raw.communitydragon.org/latest/cdragon/tft/en_us.json`,
      {
        cache: "no-store",
      }
    );
    const cdData = await res.json();
    let champions = [];

    if (cdData.sets && cdData.sets[tft_set_number]) {
      champions = cdData.sets[tft_set_number].champions.map((champion) => ({
        apiName: champion.apiName,
        name: champion.name,
        cost: champion.cost,
      }));
    }

    return champions;
  } catch (error) {
    console.error("Error fetching or filtering champion data:", error);
  }
};

const MatchTile = ({ matchDetails, summonerId }) => {
  // Extracting necessary information from matchDetails
  const {
    info: {
      participants,
      queue_id,
      game_datetime,
      game_length,
      game_version,
      tft_set_number,
    },
    metadata: { match_id },
  } = matchDetails;

  // Extracting participant levels
  const getParticipantLevel = (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    return participant ? participant.level : null;
  };

  // Extracting participant placements
  const getParticipantPlacement = (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    return participant ? participant.placement : null;
  };

  // Extracting participant augments
  const getParticipantAugments = (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    const augments = participant ? participant.augments : [];
    const augmentArray = augments.map((augments) => (
      <p key={augments}>{augments}</p>
    ));
    return augmentArray;
  };

  // Extracting participants units
  const getParticipantUnits = async (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    const unitsArray = participant ? participant.units : [];
    const unitData = await getUnitData(tft_set_number);
    const filteredUnitData = unitData.filter((champion) =>
      unitsArray.some((unit) => unit.character_id === champion.apiName)
    );

    const units = filteredUnitData.map((champion) => {
      const urlName = champion.apiName.replace(/^(.*Ryze).*/, "$1");

      return (
        <div key={champion.apiName} className="flex-col items-center justify-center">
          <Image
            className="rounded-full mx-auto"
            src={`https://raw.communitydragon.org/pbe/game/assets/characters/${urlName.toLowerCase()}/hud/${urlName.toLowerCase()}_square.tft_set${tft_set_number}.png`}
            alt={champion.name}
            height="50"
            width="50"
          />
          <p className="text-sm text-center">{champion.name}</p>
        </div>
      );
    });

    return units;
  };

  // Converting game_datetime to time difference between now and that game
  const getGameTimeDiff = () => {
    const currentTime = new Date().getTime();
    const gameTime = new Date(game_datetime).getTime();
    const timeDiffInSeconds = Math.floor((currentTime - gameTime) / 1000);

    const days = Math.floor(timeDiffInSeconds / (60 * 60 * 24));
    const hours = Math.floor((timeDiffInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeDiffInSeconds % (60 * 60)) / 60);
    const seconds = timeDiffInSeconds % 60;

    if (days > 0) {
      return `${days}d ago`;
    } else if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return `${seconds}s ago`;
    }
  };

  // Converting game_length from seconds to minutes
  const getGameLengthInMins = () => {
    const gameLength = Math.floor(game_length / 60);
    return `${gameLength} minutes`;
  };

  // Converting queue id into queue type - ranked or normal
  const getQueueType = () => {
    const queueType = queue_id;

    return `${queueType === 1100 ? "Ranked" : "Normal"}`;
  };

  // Extracting patch number from game_version
  const getPatchNum = () => {
    const patchNum = game_version.match(/Releases\/(\d+\.\d+)/)[1];
    return patchNum;
  };

  const level = getParticipantLevel(summonerId);
  const placement = getParticipantPlacement(summonerId);
  const playTimeDate = getGameTimeDiff();
  const gameLength = getGameLengthInMins();
  const queueType = getQueueType();
  const patch = getPatchNum();
  const augments = getParticipantAugments(summonerId);
  const units = getParticipantUnits(summonerId);

  return (
    <div className="mb-5">
      <p>{match_id}</p>
      <p>{queueType}</p>
      <p>{playTimeDate}</p>
      <p>{gameLength}</p>
      <p>{patch}</p>
      <div>{augments}</div>
      <div className="flex gap-2">{units}</div>
      <p>
        Level: {level !== null ? level : "Summoner not found in match details"}
      </p>
      <p>
        Placement:{" "}
        {placement !== null ? placement : "Summoner not found in match details"}
      </p>
    </div>
  );
};

export default MatchTile;
