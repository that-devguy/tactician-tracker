"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SummonerSearch() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      window.location.href = `/profile/${searchText}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-container flex h-8 items-center rounded-md bg-brand-bg2">
        <input
          type="text"
          placeholder="Search Summoner"
          className="ring-none h-8 rounded-l-md bg-brand-bg2 px-3 py-1 text-sm text-white placeholder-white/50 caret-white outline-none"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPress}
        ></input>
        <button type="submit" className="h-8 rounded-r-md px-3 py-1">
          <FontAwesomeIcon
            className="w-3 text-white/50"
            icon={faMagnifyingGlass}
          />
        </button>
      </div>
    </form>
  );
}
