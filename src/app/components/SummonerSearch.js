"use client";
import { useState } from "react";
import Link from "next/link";

export default function SummonerSearch() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-container">
      <input
        type="text"
        className="text-black"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <Link href={`/profile/${searchText}`}>Search</Link>
    </div>
  );
}
