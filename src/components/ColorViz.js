import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import useFetch from "../useFetch";
import { create } from "d3";
import { type } from "@testing-library/user-event/dist/type";

export default function ColorViz() {
  const svgRef = useRef();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [colors, setColors] = useState([]);
  const [typecolor, setTypeColor] = useState([]);
  const getTypes = async () => {
    try {
      async function getPokemonUnderType(num){
        const res = await fetch(`https://pokeapi.co/api/v2/type/${num}`);
        if (!res.ok) {
          throw Error("could not fetch data");
        }
        const data = await res.json();
        const datapokemon = data.pokemon;
        const converteddatapokemon = datapokemon.filter(pokemon => {
          const url = pokemon.pokemon.url.split("/");
          const pokeId = url[url.length - 2]
          return Number(pokeId) < 10000
        });
        const datapokemonIds = converteddatapokemon.map(pokemon => {
          const url = pokemon.pokemon.url.split("/");
          const pokeId = url[url.length - 2]
          return pokeId
        });
        // console.log(datapokemonIds)
        setTypes((currentList) => [
          ...currentList,
          {
            name: data.name,
            urls: datapokemonIds,
          },
        ]);
        // console.log(types)
      }
      for (let i = 1; i < 19; i++) {
        getPokemonUnderType(i);
      }
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const getPokemonByColor = async () => {
    try {
      async function getPokemonUnderColor(num){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${num}`);
        if (!res.ok) {
          throw Error("could not fetch data");
        }
        const data = await res.json();
        const datapokemon = data.pokemon_species;
        const datapokemonIds = datapokemon.map(pokemon => {
          const url = pokemon.url.split("/");
          return url[url.length - 2];
        })
        setColors((currentList) => [
          ...currentList,
          {
            name: data.name,
            urls: datapokemonIds
          },
        ]);
        // console.log(colors)
      }
      for (let i = 1; i < 11; i++) {
        getPokemonUnderColor(i);
      }
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  const findTypesColor = async() =>{
    // function getKeyByValue(object, value) {
    //   return Object.keys(object).find(key => {
    //     if (object[key].includes(value))
    //       return object[key]
    //   });
    // }
    const typesWithColor = types.map(pokemonInType => {
      console.log(pokemonInType.name)
      const type = pokemonInType.name
      const urls = pokemonInType.urls;
      // return {...pokemonInType,name:'Hi'}
      const withColor = urls.map(url => {
        // console.log("checking "+url);
        const filteredColor = colors.filter(color => color.urls.includes(url));
        const pokemonColor = filteredColor[0].name
        const newData = {
          id: url,
          color:  colors.filter(color => color.urls.includes(url))[0].name,
        } 
        return {url,pokemonColor} 
        
      })
      return {...pokemonInType,  urls:withColor}
    });
    // console.log(typesWithColor )
    // setTypes(typesWithColor)
    // console.log(types)
  }
  useEffect(() => {
    getTypes();
    getPokemonByColor();
    findTypesColor();
  }, []);
  useEffect(() => {
    const w = 400;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "orange")
      .attr("fill", "white")
      .append("text").text("Coming soon")
      .attr("x",10)
      .attr("y",20);
  },[!isLoading])
  return (
      <>
      <svg ref={svgRef}></svg>
      {/* <div>{!isLoading && types[35].name}</div> */}
      </>
  )
}
