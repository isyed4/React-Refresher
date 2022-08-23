import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(()=>{

    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => setPokemon(data.results))
}, [])

  const displayPokemon = pokemon.map((item) => {
    return (
      <ul>
        <li> {item.name}</li>
      </ul>
    );
  });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange} type="text" />
        <input type="submit" />
      </form>

      <div>{displayPokemon}</div>
    </div>
  );
}

export default App;
