import React from "react";
import "./Character.css";
import Loading from "../Loading/Loading";
import Character from "./Character";
export default function Characters({ data, isLoading, search }) {
  const searchedCharacter = data.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchedCharacter);
  return isLoading ? (
    <div className="characters">
      {searchedCharacter.map((character, index) => (
        <Character character={character} key={character.name} />
      ))}
    </div>
  ) : (
    <div className="characters">
      <Loading />
    </div>
  );
}
