import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

import getSummonerById from "@/app/libs/getSummonerById";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

const MatchTile = ({
  matchDetails,
  summonerId,
  championData,
  augmentData,
  traitData,
}) => {
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

  // Extracting participant names with icons
  const renderParticipantData = async (summonerId) => {
    try {
      const participantsArray = await Promise.all(
        participants.map((participant) => getSummonerById(participant.puuid))
      );
      const participantData = participantsArray.map((participant) => {
        const { name, profileIconId } = participant;
        return (
          <div key={name} className="flex items-center gap-1 h-fit mb-1">
            <Image
              className="rounded-full"
              src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${profileIconId}.jpg`}
              alt={name}
              width={18}
              height={18}
            />
            <Link
              className={`text-xs text-white/50 hover:text-white hover:underline truncate ${
                summonerId === participant.puuid
                  ? "font-semibold text-white/60"
                  : ""
              }`}
              href={`/profile/${name}`}
            >
              {name}
            </Link>
          </div>
        );
      });
      return participantData;
    } catch (error) {
      console.error("Error fetching summoner data:", error);
      return null;
    }
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
        <>
          <TooltipProvider delayDuration={100} disableHoverableContent={true}>
            <Tooltip>
              <TooltipTrigger className="cursor-default hover:cursor-default">
                <div
                  key={`${augment.name}${index}`}
                  className="bg-[#1d1d1d] rounded-full p-1"
                >
                  <Image
                    className={``}
                    src={`https://raw.communitydragon.org/latest/game/${icon.toLowerCase()}`}
                    alt={augment.name}
                    height="27"
                    width="27"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="w-48 my-1 select-none">
                  <p className="text-brand-secondary mb-1">{augment.name}</p>
                  <p>{augment.desc}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
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
      const itemNames = unitInUnitsArray ? unitInUnitsArray.itemNames : [];

      const itemData = itemNames.map((itemName) =>
        augmentData.find((item) => item.apiName === itemName)
      );

      // console.log(itemData);

      return (
        <div
          key={`${starLevel} ${champion.apiName}`}
          className="flex-col items-center justify-center w-12"
        >
          <div className="flex justify-center">
            {starLevel === 1 && (
              <>
                <FontAwesomeIcon
                  className="w-2.5 mb-1 invisible"
                  icon={faStar}
                />
              </>
            )}
            {starLevel === 2 && (
              <>
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-zinc-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-zinc-400"
                  icon={faStar}
                />
              </>
            )}
            {starLevel === 3 && (
              <>
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-amber-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-amber-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-amber-400"
                  icon={faStar}
                />
              </>
            )}
            {starLevel >= 4 && (
              <>
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-emerald-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-emerald-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-emerald-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-2.5 mb-1 text-emerald-400"
                  icon={faStar}
                />
              </>
            )}
          </div>

          <Image
            className={`rounded-full mx-auto mb-2 ${costColor}`}
            src={`https://raw.communitydragon.org/latest/game/assets/characters/${urlName.toLowerCase()}/hud/${urlName.toLowerCase()}_square.tft_set${tft_set_number}.png`}
            alt={champion.name}
            height="40"
            width="40"
          />
          <div className="item-icons flex justify-center -mt-4 mb-2 h-[15px]">
            {itemData.map(({ name, icon }, index) => (
              <div key={index} className="z-30">
                <TooltipProvider delayDuration={200} disableHoverableContent={true}>
                  <Tooltip>
                    <TooltipTrigger className="cursor-default hover:cursor-default">
                      <Image
                        className="border border-white"
                        src={`https://raw.communitydragon.org/latest/game/${icon
                          .toLowerCase()
                          .replace(/\.tex$/, ".png")}`}
                        alt={name}
                        height="15"
                        width="15"
                      />
                    </TooltipTrigger>
                    <TooltipContent>{name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
          <p className="text-xs text-center truncate">{champion.name}</p>
        </div>
      );
    });

    return units;
  };

  // Extracting participant traits
  const getParticipantTraits = (summonerId) => {
    const participant = participants.find(
      (participant) => participant.puuid === summonerId
    );
    const participantTraits = participant.traits;

    participantTraits.sort((a, b) => b.style - a.style);

    // Sorts traits with the same tier_current by num_units in descending order
    let i = 0;
    while (i < participantTraits.length - 1) {
      if (participantTraits[i].style === participantTraits[i + 1].style) {
        let j = i + 1;
        while (
          j < participantTraits.length &&
          participantTraits[j].style === participantTraits[i].style
        ) {
          j++;
        }
        const sameTierTraits = participantTraits.slice(i, j);
        sameTierTraits.sort((a, b) => b.num_units - a.num_units);
        for (let k = i; k < j; k++) {
          participantTraits[k] = sameTierTraits[k - i];
        }
        i = j;
      } else {
        i++;
      }
    }

    const traits = participantTraits.map((trait) => {
      const traitRawData = traitData.find(
        (data) => data.apiName === trait.name
      );
      const traitIcon = traitRawData.icon
        .toLowerCase()
        .replace(/\.tex$/, ".png");

      let traitColor = "";

      if (trait.style === 1) {
        traitColor = "traitTier1";
      } else if (trait.style === 2) {
        traitColor = "traitTier2";
      } else if (trait.style === 3) {
        traitColor = "traitTier3";
      } else {
        traitColor = "traitTier4";
      }

      if (trait.style > 0) {
        return (
          <>
            <TooltipProvider delayDuration={200} disableHoverableContent={true}>
              <Tooltip>
                <TooltipTrigger className="cursor-default hover:cursor-default">
                  <div
                    key={trait.name}
                    className={`${traitColor} h-fit w-fit p-1 rounded-full`}
                  >
                    <Image
                      className={`z-10 invert`}
                      src={`https://raw.communitydragon.org/latest/game/${traitIcon}`}
                      alt={trait.name}
                      height="15"
                      width="15"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  {trait.num_units} {traitRawData.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        );
      }
    });
    return traits;
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
  const allParticipants = renderParticipantData(summonerId);
  const traits = getParticipantTraits(summonerId);

  return (
    <div className="flex flex-col mb-2 py-3 px-5 bg-brand-bg2 rounded-md select-none">
      <div className="flex justify-between items-center my-5 gap-3 bg-brand-bg2 rounded-md">
        {/* <p>{match_id}</p> */}
        <div className="flex flex-col justify-center w-1/12">
          <div className="match-placement justify-center px-2">
            <p className="text-center font-semibold text-3xl ">{placement}</p>
            <p className="text-center text-xs">Place</p>
          </div>

          {/* <p>
          Level:{" "}
          {level !== null ? level : "Summoner not found in match details"}
        </p> */}
        </div>
        <div className="flex gap-3 items-center justify-start w-9/12">
          <div className="flex flex-row flex-wrap gap-1 items-center justify-center w-2/12">
            {traits}
          </div>
          <div className="flex flex-col items-center justify-center gap-1 w-1/12">
            {augments}
          </div>
          <div className="flex flex-wrap items-center justify-start gap-1">
            {units}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 w-3/12 h-fit">
          {allParticipants}
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
