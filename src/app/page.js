"use client"
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  function searchForPlayer(event) {
    console.log()
  }

  return (
    <main>
      <div>Home</div>
      <div className="search-container">
        <h4>Summoner Search</h4>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}>Search</button>
      </div>
    </main>
  );
}
