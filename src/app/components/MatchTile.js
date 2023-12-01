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
  puuid,
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
  const getParticipantLevel = (puuid) => {
    const participant = participants.find(
      (participant) => participant.puuid === puuid
    );
    return participant ? participant.level : null;
  };

  // Extracting participant names with icons
  const renderParticipantData = async (puuid) => {
    try {
      const participantsArray = await Promise.all(
        participants.map((participant) => getSummonerById(participant.puuid))
      );
      const participantData = participantsArray.map((participant) => {
        const { name, profileIconId } = participant;
        return (
          <div key={name} className="mb-1 flex h-fit items-center gap-1">
            <Image
              className="rounded-full"
              src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${profileIconId}.jpg`}
              alt={name}
              width={18}
              height={18}
            />
            <Link
              className={`truncate text-xs hover:text-white hover:underline ${
                puuid === participant.puuid
                  ? "pointer-events-none text-white hover:no-underline"
                  : "text-white/50"
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
  const getParticipantPlacement = (puuid) => {
    const participant = participants.find(
      (participant) => participant.puuid === puuid
    );

    let placementColor = "";

    if (participant.placement === 1) {
      placementColor = "first-place";
    } else if (participant.placement === 2) {
      placementColor = "second-place";
    } else if (participant.placement === 3) {
      placementColor = "third-place";
    } else if (participant.placement === 4) {
      placementColor = "fourth-place";
    } else if (participant.placement >= 5) {
      placementColor = "bottom-place";
    }

    let placementText = "";

    if (participant.placement === 1) {
      placementText = `${participant.placement}st`;
    } else if (participant.placement === 2) {
      placementText = `${participant.placement}nd`;
    } else if (participant.placement === 3) {
      placementText = `${participant.placement}rd`;
    } else {
      placementText = `${participant.placement}th`;
    }

    return { placementColor: placementColor, placementText: placementText };
  };

  // Extracting participant augments
  const getParticipantAugments = async (puuid) => {
    const participant = participants.find(
      (participant) => participant.puuid === puuid
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
                  className="rounded-full bg-[#1d1d1d] p-1"
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
              <TooltipContent>{augment.name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      );
    });
    return augments;
  };

  // Extracting participants units
  const getParticipantUnits = async (puuid) => {
    const participant = participants.find(
      (participant) => participant.puuid === puuid
    );
    const unitsArray = participant ? participant.units : [];
    const filteredUnitData = championData.filter((champion) =>
      unitsArray.some((unit) => unit.character_id === champion.apiName)
    );

    const units = filteredUnitData.map((champion) => {
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

      const icon = champion.icon.replace(".tex", ".png");

      return (
        <div
          key={`${starLevel} ${champion.apiName}`}
          className="w-11 flex-col items-center justify-center md:w-12"
        >
          <div className="flex justify-center">
            {starLevel === 1 && (
              <>
                <FontAwesomeIcon
                  className="invisible mb-1 w-2 md:w-2.5"
                  icon={faStar}
                />
              </>
            )}
            {starLevel === 2 && (
              <>
                <FontAwesomeIcon
                  className="mb-1 w-2 text-zinc-400 md:w-2.5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mb-1 w-2 text-zinc-400 md:w-2.5"
                  icon={faStar}
                />
              </>
            )}
            {starLevel === 3 && (
              <>
                <FontAwesomeIcon
                  className="mb-1 w-2 text-amber-400 md:w-2.5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mb-1 w-2 text-amber-400 md:w-2.5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mb-1 w-2 text-amber-400 md:w-2.5"
                  icon={faStar}
                />
              </>
            )}
            {starLevel >= 4 && (
              <>
                <FontAwesomeIcon
                  className="mb-1 w-2 text-emerald-400 md:w-2.5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mb-1 w-2 text-emerald-400 md:w-2.5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mb-1 w-2 text-emerald-400 md:w-2.5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mb-1 w-2 text-emerald-400 md:w-2.5"
                  icon={faStar}
                />
              </>
            )}
          </div>

          <Image
            className={`mx-auto mb-2 rounded-full ${costColor}`}
            src={`https://raw.communitydragon.org/latest/game/${icon.toLowerCase()}`}
            alt={champion.name}
            height="40"
            width="40"
          />
          <div className="item-icons -mt-4 mb-2 flex h-[15px] justify-center">
            {itemData.map(({ name, icon }, index) => (
              <div key={index} className="z-30">
                <TooltipProvider
                  delayDuration={200}
                  disableHoverableContent={true}
                >
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
          <p className="hidden truncate text-center text-xs md:block">
            {champion.name}
          </p>
        </div>
      );
    });

    return units;
  };

  // Extracting participant traits
  const getParticipantTraits = (puuid) => {
    const participant = participants.find(
      (participant) => participant.puuid === puuid
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
    // console.log(participantTraits);
    const traits = participantTraits.map((trait) => {
      const traitRawData = traitData.find(
        (data) => data.apiName === trait.name
      );
      // console.log(traitRawData);
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
                    className={`${traitColor} h-fit w-fit rounded-full p-1`}
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

  const level = getParticipantLevel(puuid);
  const placement = getParticipantPlacement(puuid);
  const playTimeDate = getGameTimeDiff();
  const gameLength = getGameLengthInMins();
  const queueType = getQueueType();
  const patch = getPatchNum();
  const augments = getParticipantAugments(puuid);
  const units = getParticipantUnits(puuid);
  const allParticipants = renderParticipantData(puuid);
  const traits = getParticipantTraits(puuid);

  return (
    <div className="mx-auto mb-2 flex max-w-lg select-none flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
      {/* mobile styles */}
      <div className="mb-2 flex items-center gap-2 text-[.6rem] text-white/50 md:hidden">
        <p
          className={`text-center text-base font-black text-white/50 ${placement.placementColor}`}
        >
          {placement.placementText}
        </p>
        <FontAwesomeIcon className="h-[2px] w-[2px]" icon={faCircle} />
        <p className="font-bold text-white">{queueType}</p>
        <FontAwesomeIcon className="h-[2px] w-[2px]" icon={faCircle} />
        <p>{playTimeDate}</p>
        <FontAwesomeIcon className="h-[2px] w-[2px]" icon={faCircle} />
        <p>{gameLength}</p>
        <FontAwesomeIcon className="h-[2px] w-[2px]" icon={faCircle} />
        <p>{patch}</p>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-md bg-brand-bg2 md:hidden">
        <div>
          <div className="flex w-full items-center justify-start">
            <div className="flex flex-wrap items-center justify-start gap-2">
              {units}
            </div>
          </div>
        </div>
        <div className="traitsAugments-container flex w-full flex-row items-center justify-between gap-2">
          <div className="flex flex-shrink items-center justify-center gap-1">
            {traits}
          </div>
          <div className="flex flex-shrink items-center justify-center gap-1">
            {augments}
          </div>
        </div>
      </div>

      {/* default styles */}
      <div className="hidden items-center gap-3 text-xs text-white/50 md:flex">
        <p className="font-bold text-white">{queueType}</p>
        <FontAwesomeIcon className="h-[2px] w-[2px]" icon={faCircle} />
        <p>{playTimeDate}</p>
        <FontAwesomeIcon className="h-[2px] w-[2px]" icon={faCircle} />
        <p>{gameLength}</p>
        <FontAwesomeIcon className="h-[2px] w-[2px]" icon={faCircle} />
        <p>{patch}</p>
      </div>
      <div className="my-3 hidden items-center justify-between gap-3 rounded-md bg-brand-bg2 md:flex">
        <div className="flex w-1/12 flex-col justify-center">
          <div className="match-placement justify-center">
            <p
              className={`text-center text-3xl font-black text-white/50 ${placement.placementColor}`}
            >
              {placement.placementText}
            </p>
            <p className="text-center text-xs">Place</p>
          </div>
        </div>
        <div className="flex w-9/12 items-center justify-start gap-3">
          <div className="flex w-2/12 flex-row flex-wrap items-center justify-center gap-1">
            {traits}
          </div>
          <div className="flex w-1/12 flex-col items-center justify-center gap-1">
            {augments}
          </div>
          <div className="flex flex-wrap items-center justify-start gap-1">
            {units}
          </div>
        </div>
        <div className="grid h-fit w-3/12 grid-cols-2 gap-1">
          {allParticipants}
        </div>
      </div>
    </div>
  );
};

export default MatchTile;
