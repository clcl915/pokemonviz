import React from "react";

export default function Pokemon({ id, name, frontImage, shinyImage, type }) {
  return (
    <div className="pokemonContainer">
      <p className="pokemonId">No. {id}</p>
      <img
        src={frontImage}
        alt={name}
        className={id % 15 == 0 ? "halfOfShown" : ""}
        onMouseOver={(e) => (e.currentTarget.src = shinyImage)}
        onMouseOut={(e) => (e.currentTarget.src = frontImage)}
      ></img>
      <p className="pokemonName">{name}</p>
      <small className="pokemonType">{type}</small>
    </div>
  );
}
