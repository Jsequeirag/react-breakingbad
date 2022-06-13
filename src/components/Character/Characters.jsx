import React from "react";
import "./Character.css";
import Loading from "../Loading/Loading";
import Character from "./Character";
export default function Characters({ data, isLoading, search }) {
  console.log(isLoading);
  console.log(data);
  console.log(search);

  const searchedCharacter = data.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchedCharacter);
  return isLoading ? (
    <div className="characters">
      {searchedCharacter.map((character, index) => (
        <Character character={character} />
      ))}
    </div>
  ) : (
    <Loading />
  );
}
