"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SummonerSearch() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-container bg-neutral-100 flex items-center rounded-md h-8">
      <input
        type="text"
        placeholder="Search Summoner"
        className="text-black bg-neutral-100 text-sm py-1 px-3 rounded-l-md h-8 outline-none ring-none"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <Link href={`/profile/${searchText}`}>
        <button className="py-1 px-3 rounded-r-md h-8">
          <FontAwesomeIcon
            className="w-3 text-neutral-400"
            icon={faMagnifyingGlass}
          />
        </button>
      </Link>
    </div>
  );
}
