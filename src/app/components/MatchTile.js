import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

const MatchTile = ({ matchDetails, summonerId, championData, augmentData }) => {
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

    if (participant.placement === 1) {
      return `${participant.placement}st`;
    } else if (participant.placement === 2) {
      return `${participant.placement}nd`;
    } else if (participant.placement === 3) {
      return `${participant.placement}rd`;
    } else {
      return `${participant.placement}th`;
    }
  };

  // Extracting participant augments
  const getParticipantAugments = async (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    const augmentsArray = participant ? participant.augments : [];

    const filteredAugments = augmentsArray.map((augmentApiName) =>
      augmentData.find((augment) => augment.apiName === augmentApiName)
    );

    const augments = filteredAugments.map((augment, index) => {
      const icon = augment.icon.replace(/\.tex$/, ".png");

      return (
        <Image
          key={`${augment.name}${index}`}
          className={`rounded-full mx-auto mb-1`}
          src={`https://raw.communitydragon.org/latest/game/${icon.toLowerCase()}`}
          alt={augment.name}
          height="30"
          width="30"
        />
      );
    });
    return augments;
  };

  // Extracting participants units
  const getParticipantUnits = async (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    const unitsArray = participant ? participant.units : [];
    const filteredUnitData = championData.filter((champion) =>
      unitsArray.some((unit) => unit.character_id === champion.apiName)
    );

    const units = filteredUnitData.map((champion) => {
      const urlName = champion.apiName.replace(/^(.*Ryze).*/, "$1");

      let costColor = "";

      if (champion.cost === 1) {
        costColor = "one-cost";
      } else if (champion.cost === 2) {
        costColor = "two-cost";
      } else if (champion.cost === 3) {
        costColor = "three-cost";
      } else if (champion.cost === 4) {
        costColor = "four-cost";
      } else if (champion.cost === 5) {
        costColor = "five-cost";
      } else {
        costColor = "random-cost";
      }

      const unitInUnitsArray = unitsArray.find(
        (unit) => unit.character_id === champion.apiName
      );
      const starLevel = unitInUnitsArray ? unitInUnitsArray.tier : 0;

      return (
        <div
          key={`${starLevel} ${champion.apiName}`}
          className="flex-col items-center justify-center w-14"
        >
          <div className="flex justify-center">
            {starLevel === 1 && (
              <>
                <FontAwesomeIcon className="w-3 mb-1 invisible" icon={faStar} />
              </>
            )}
            {starLevel === 2 && (
              <>
                <FontAwesomeIcon
                  className="w-3 mb-1 text-zinc-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-3 mb-1 text-zinc-400"
                  icon={faStar}
                />
              </>
            )}
            {starLevel === 3 && (
              <>
                <FontAwesomeIcon
                  className="w-3 mb-1 text-amber-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-3 mb-1 text-amber-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-3 mb-1 text-amber-400"
                  icon={faStar}
                />
              </>
            )}
            {starLevel >= 4 && (
              <>
                <FontAwesomeIcon
                  className="w-3 mb-1 text-emerald-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-3 mb-1 text-emerald-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-3 mb-1 text-emerald-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-3 mb-1 text-emerald-400"
                  icon={faStar}
                />
              </>
            )}
          </div>

          <Image
            className={`rounded-full mx-auto mb-2 ${costColor}`}
            src={`https://raw.communitydragon.org/latest/game/assets/characters/${urlName.toLowerCase()}/hud/${urlName.toLowerCase()}_square.tft_set${tft_set_number}.png`}
            alt={champion.name}
            height="45"
            width="45"
          />
          <p className="text-xs text-center truncate">{champion.name}</p>
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

    return `${queueType === 1100 ? "RANKED" : "NORMAL"}`;
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
    <div className="flex flex-col mb-2 py-3 px-5 bg-brand-bg2 rounded-md">
      <div className="flex justify-between my-5 gap-2 bg-brand-bg2 rounded-md">
        {/* <p>{match_id}</p> */}
        <div className="flex flex-col justify-center w-fit">
          <div className="match-placement justify-center px-2">
            <p className="font-semibold text-3xl">{placement}</p>
            <p className="text-center text-xs">Place</p>
          </div>

          {/* <p>
          Level:{" "}
          {level !== null ? level : "Summoner not found in match details"}
        </p> */}
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col my-auto">{augments}</div>
          <div className="flex flex-wrap justify gap-1">{units}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-1 text-xs text-white/50">
        <p className="font-bold text-white">{queueType}</p>
        <FontAwesomeIcon className="w-[0.3px] h-[0.3px]" icon={faCircle} />
        <p>{playTimeDate}</p>
        <FontAwesomeIcon className="w-[0.3px] h-[0.3px]" icon={faCircle} />
        <p>{gameLength}</p>
        <FontAwesomeIcon className="w-[0.3px] h-[0.3px]" icon={faCircle} />
        <p>{patch}</p>
      </div>
    </div>
  );
};

export default MatchTile;
