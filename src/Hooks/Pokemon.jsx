import React, { useState } from 'react'

const Pokemon = (Pokemon) => {


    function onClick(e) {
      e.classList.toggle('Caught')
    }



  return (
    <div className='PokemonContainer'>

        <img className={`Normal`} onClick={(e) => {onClick(e.target)}} src={Pokemon.image} alt={Pokemon.name} />
        <img className={`Shiny`}  onClick={(e) => {onClick(e.target)}} src={Pokemon.shiny} alt={Pokemon.name} />

    </div>
  )
}

export default Pokemon