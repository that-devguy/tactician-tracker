"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function LeaderboardTable({ leaderboards = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 30;
  const totalPages = Math.ceil(leaderboards.length / playersPerPage);

  const start = (currentPage - 1) * playersPerPage;
  const end = start + playersPerPage;

  const Pagination = () => (
    <div className="pagination my-1 flex justify-center gap-3 px-4 text-sm text-white/50 md:my-3">
      <button
        className={currentPage <= 1 ? "none" : "hover:text-brand-main"}
        disabled={currentPage <= 1}
        onClick={() => {
          setCurrentPage((prev) => Math.max(prev - 1, 1));
          window.scrollTo(0, 0);
        }}
      >
        Prev
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        className={currentPage >= totalPages ? "none" : "hover:text-brand-main"}
        disabled={currentPage >= totalPages}
        onClick={() => {
          setCurrentPage((prev) => Math.min(prev + 1, totalPages));
          window.scrollTo(0, 0);
        }}
      >
        Next
      </button>
    </div>
  );

  // Check if leaderboards is an array and has data
  const isArray = Array.isArray(leaderboards);
  const data = isArray ? leaderboards : [];
  const isEmpty = data.length === 0;

  // Function to generate the summoner profile link
  function generateSummonerProfileLink(summonerName, summonerTagLine) {
    const baseURL = "https://tacticiantracker.com/profile/";
    const dynamicLink = `${baseURL}${summonerName}-${summonerTagLine}`;
    window.location.href = dynamicLink;
  }

  return (
    <div className="mx-auto max-w-7xl">
      {isEmpty ? (
        <p className="py-4 text-center text-white/50">
          Waiting for players to rank up
        </p>
      ) : (
        <>
          <div className="headers flex justify-between px-2 py-2 text-xs font-light text-white/50 md:text-sm">
            <p className="w-1/12">Rank</p>
            <p className="w-3/12">Name</p>
            <p className="w-1/12 md:w-2/12">Tier</p>
            <p className="w-1/12">LP</p>
            <p className="w-2/12">Top4</p>
            <p className="w-2/12 md:w-1/12">Games</p>
          </div>
          {data.slice(start, end).map((leaderboard, index) => {
            let rank = "leaderboard-tile"; // Default border style
            let actualRank = start + index + 1;

            if (actualRank === 1) {
              rank = "first-placeTile";
            } else if (actualRank === 2) {
              rank = "second-placeTile";
            } else if (actualRank === 3) {
              rank = "third-placeTile";
            } else if (actualRank === 4) {
              rank = "fourth-placeTile";
            }

            let gamesPlayed = leaderboard.wins + leaderboard.losses;
            let top4Percent = (leaderboard.wins / gamesPlayed) * 100;
            let winRate = Math.round(top4Percent);
            const tier = leaderboard.tier;
            const capTier = tier.charAt(0).toUpperCase() + tier.slice(1);

            return (
              <div
                key={leaderboard.summonerId}
                className="text-[.7rem] mb-2 flex items-center justify-between rounded-lg bg-brand-bg2 px-2 py-2 md:text-sm"
              >
                <div className="w-1/12">
                  <div
                    className={`${rank} flex h-6 w-6 items-center justify-center rounded-md md:h-7 md:w-7`}
                  >
                    <p
                      className={`flex h-5 w-5 items-center justify-center rounded-md bg-brand-bg2 md:h-6 md:w-6 ${
                        actualRank === 1 ? `text-white` : `text-white/50`
                      }`}
                    >
                      {actualRank}
                    </p>
                  </div>
                </div>

                <p
                  onClick={() =>
                    generateSummonerProfileLink(
                      leaderboard.summonerName,
                      leaderboard.tagLine
                    )
                  }
                  className="w-3/12 items-center truncate text-sm hover:cursor-pointer hover:underline md:flex md:text-base"
                >
                  {leaderboard.summonerName}
                  <div className="hidden md:flex">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="ml-1 text-xs text-white/50"
                    />
                  </div>
                </p>
                <p className="flex w-1/12 gap-1 md:w-2/12">
                  <Image
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/${tier}.svg`}
                    height="22"
                    width="22"
                    alt={`Mini ${capTier} Emblem`}
                    className="select-none"
                  />
                  <span className="hidden md:block">{capTier}</span>
                </p>
                <p className="w-1/12 text-white/50">
                  {leaderboard.leaguePoints}
                </p>
                <p className="w-2/12 text-white/50">
                  {leaderboard.wins}{" "}
                  <span className="font-light text-brand-secondary">
                    ({winRate}%)
                  </span>
                </p>
                <p className="w-2/12 text-white/50 md:w-1/12">{gamesPlayed}</p>
              </div>
            );
          })}
          <Pagination />
        </>
      )}
    </div>
  );
}
