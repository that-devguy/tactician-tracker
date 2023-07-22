import Image from "next/image";

const MatchTile = ({ matchDetails, summonerId }) => {
  // Extracting necessary information from matchDetails
  const {
    info: { participants, queue_id, game_datetime, game_length, game_version },
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
  const getParticipantUnits = (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    const unitsArray = participant ? participant.units : [];
    const units = unitsArray.map((unitsArray) => (
      <Image
        key={unitsArray.character_id}
        src={`https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/${unitsArray.character_id.toLowerCase()}_mobile.tft_set9.png`}
        alt={unitsArray.character_id}
        height="50"
        width="50"
      />
      // <p key={unit.character_id}>{unit.character_id}</p>
    ));
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
