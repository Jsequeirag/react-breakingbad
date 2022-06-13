import React from "react";
import "../Utils/imagehover.css-master/css/imagehover.min.css";
import "./Character.css";

export default function Character({ character }) {
  return (
    <div className="card" key={character.name}>
      <figure className="imghvr-fade">
        <div className="image-container">
          <img src={character.img} alt="" />
        </div>
        <figcaption>
          <div className="description-container">
            <br />
            Occupation:{character.occupation}
            <br />
            Breaking Bad Seasons:{character.appearance}
            <br /> Status:{character.status}
          </div>
        </figcaption>
      </figure>
      <div className="title">
        <h1>{character.name}</h1>
      </div>
    </div>
  );
}
