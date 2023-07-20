const MatchTile = ({ matchDetails, summonerId }) => {
  // Extracting necessary information from matchDetails
  const {
    info: { participants, queue_id, game_datetime, game_length, game_version },
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

  const level = getParticipantLevel(summonerId);
  const placement = getParticipantPlacement(summonerId);
  const playTimeDate = getGameTimeDiff();

  return (
    <div className="mb-5">
      <p>{queue_id === 1100 ? "Ranked" : "Normal"}</p>
      <p>{playTimeDate}</p>
      <p>{game_length}</p>
      <p>{game_version}</p>
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
