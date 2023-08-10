import { useEffect, useState } from 'react'
import './App.css'
import Pokedex from './Hooks/Pokedex'
import PokemonList from './Hooks/PokemonList'
import GameVersion from './Hooks/GameVersion'


const App = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  const [openVersion, setOpenVersion] = useState(true);
  const [dexNumber, setDexNumber] = useState('1');
  const [searchName, setSearchName] = useState("");
  const [gameIMG, setGameIMG] = useState("")

  return (
    <>
      <GameVersion openVersion={openVersion} setOpenVersion={setOpenVersion} setDexNumber={setDexNumber} setGameIMG={setGameIMG} />
      <Pokedex gameIMG={gameIMG} setAllPokemons={setAllPokemons} setOpenVersion={setOpenVersion} openVersion={openVersion} dexNumber={dexNumber} allPokemons={allPokemons} setSearchName={setSearchName} searchName={searchName} />
      <PokemonList searchName={searchName} allPokemons={allPokemons} />
    </>
  )
}

export default App
