import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import PokeSearch from "./PokeSearch";
import { MdPadding } from "react-icons/md";
function Pokemon() {
  const [PokemonData, setPokemonData] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState("");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=124"
        );
        //data is in res.data
        const pokemondata = res.data.results;
        const detailedPokemonData = pokemondata.map(async (item) => {
          const response = await axios.get(item.url);
          return response.data;
        });

        // here in detailedPokemondata we will recieve promisified data to use it we will have await Pomise.all

        const promisifiedpokemondata = await Promise.all(detailedPokemonData);
        console.log(promisifiedpokemondata);
        setPokemonData(promisifiedpokemondata);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPokemon();
  }, []);

  const SearchData = PokemonData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>PokeDex</h1>
      </header>
      <PokeSearch search={search} setsearch={setsearch} pokemon={PokemonData} />
      <div>
        <ul className="cards">
          {loading == true ? (
            <div className="loading">Loading...</div>
          ) : (
            SearchData.map((item) => (
              <PokemonCard
                key={item.id}
                item={item}
                styles={{ padding: "10px" }}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Pokemon;
