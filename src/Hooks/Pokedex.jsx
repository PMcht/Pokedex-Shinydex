import { useEffect, useState } from 'react'
import './Pokemon.scss'
import SearchBar from './SearchBar';

const Pokedex = ({setAllPokemons, setOpenVersion, openVersion, dexNumber, setSearchName, searchName, gameIMG}) => {


  
  //Fetch pokedex data
    const getAllPokemons = async () => {

      //Reset Array
      setAllPokemons([]);
      
      const res = await fetch(`https://pokeapi.co/api/v2/pokedex/${dexNumber}`);
      const data = await res.json();
  
      const pokemonInDex = data.pokemon_entries;
  
      // console.log(pokemonInDex)

      getPokemonSpecies(pokemonInDex);
      // await console.log(allPokemons)

    }

  //Get all species & share URL of pokemon
    function getPokemonSpecies (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`${pokemon.pokemon_species.url}`);
        const data = await res.json();
        const order = pokemon.entry_number;

        const pokemonURL = data.varieties[0].pokemon.url

        // console.log(pokemonURL)
        getPokemonObject(pokemonURL, order)        
      })
    }

  //Fetch pokemon URL & add it to list
     async function getPokemonObject (result, order) {
        const res = await fetch(result);
        const data = await res.json();
        data["order"] = order;

        setAllPokemons(currentList => [... currentList, data])
          
    }

  //Launches function everytime dex number changes
    useEffect(() => {
        getAllPokemons()
      }, [dexNumber])


  //Shiny Handler
      function setShinyHandler(){
        document.body.classList.toggle("Shiny");
      }

      return (
        <div className='Header'>
          <img src={'./game-logos/pokedex.png'} id="mainLogo" alt="Logo" />
          <div className='Elements'>

            
            <div className='buttonStyling'>
                <h4>Change Game Version</h4>
                <img id="versionButton" onClick={() => setOpenVersion(!openVersion)} src={gameIMG} />
            </div>
            
            <div className='buttonStyling'>
                <h4>Search for Pokemon</h4>
                <SearchBar setSearchName={setSearchName} searchName={searchName} />
            </div>

            <div className='buttonStyling'>
                <h4>Toggle Shiny Mode</h4>
                <input onChange={() => setShinyHandler()} className="tgl tgl-flat" id="cb4" type="checkbox"/>
                <label className="tgl-btn" htmlFor="cb4"></label>
            </div>
            
          </div>
        </div>

      )

}

export default Pokedex