import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import './Pokemon.scss'

const PokemonList = ({allPokemons, searchName}) => {

  const PokemonArray = allPokemons;
  
  // 
  //Order Array
  // PokemonArray.sort(
  //   (p1, p2) => (p1.order > p2.order) ? 1 : (p1.order < p2.order) ? -1 : 0);

  // Filter Array
  const PokemonFiltered = PokemonArray.filter(pokemon => pokemon.name.includes(searchName))
    

  return (
    <section className='PokemonListContainer'>
        {PokemonFiltered.map((pokemon) => {
            return (

                <Pokemon 
                
                  key={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  shiny={pokemon.sprites.front_shiny}

                />


            )
        })}
    </section>
  )
}

export default PokemonList