import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import useFetch from "./useFetch";
import enterView from "enter-view";

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [allPokemon, setPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=30"
  );
  const [next30, setnext30] = useState();

  const getPokemons = async () => {
    try {
      const res = await axios.get(loadMore);
      console.log(res);
      if (res.status != 200) {
        throw Error("could not fetch data");
      }

      const data = await res.data;
      // console.log("line22 ", data)
      setnext30(data.next);
      setLoading(false);
      setError(null);
      setnext30(data.next);

      function createPokemonObject(result) {
        result.forEach(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          const data = await res.data;
          setPokemon((currentList) => {
            currentList = [...currentList, data];
            currentList.sort((a, b) => (a.id > b.id ? 1 : -1));
            return currentList;
          });
        });
      }
      createPokemonObject(data.results);
      await console.log(allPokemon);
      await console.log(data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  
  useEffect(() => {
    getPokemons();
    
  }, [loadMore]);
  enterView({
    selector: ".pokemonContainer",
    enter: function (el) {
      el.classList.add('entered');
      console.log("entered")
      setLoadMore(next30)
    }
  });
  
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div style={{ textAlign: "center" }}>Loading...</div>}
      <div className="container">
        {allPokemon &&
          allPokemon.map((pokemon, index) => (
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              frontImage={pokemon.sprites.front_default}
              shinyImage={pokemon.sprites.back_default}
              type={pokemon.types[0].type.name}
              key={index}
            ></Pokemon>
          ))}
      </div>
      {/* {!isLoading && (
        <button className="load-more" onClick={() => setLoadMore(next30)}>
          Load More
        </button>
      )} */}
    </>
  );
}
