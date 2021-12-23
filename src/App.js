import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setPokemon(response.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1118")
      // .then((response) => console.log(response.data.results))
      .then((response) => {
        setPokemon(response.data.results);
      });
  }, []);

  return (
    <div className="App">
      {pokemon.length > 0 &&
        pokemon.map((pokemon, index) => {
          return (
            <div className="flex flex-row m-2 text-lg font-bold" key={index}>
              {pokemon.name}
            </div>
          );
        })}
    </div>
  );
}

export default App;
