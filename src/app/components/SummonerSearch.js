"use client";
import { useState } from "react";
import axios from "axios";

export default function SummonerSearch() {
  const [searchText, setSearchText] = useState("");
  const riotAPI = process.env.API_KEY;
  function searchForPlayer(event) {
    var APICallString =
      "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" +
      searchText +
      "?api_key=" +
      riotAPI;
    axios
      .get(APICallString)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="search-container">
      <h4>Summoner Search</h4>
      <input
        type="text"
        className="text-black"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button onClick={(e) => searchForPlayer(e)}>Search</button>
    </div>
  );
}
