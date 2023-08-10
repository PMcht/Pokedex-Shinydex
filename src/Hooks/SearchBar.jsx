import React from 'react'
import './Pokemon.scss'

const SearchBar = ({setSearchName, searchName}) => {



    function onInputChange(e){
        setSearchName(e.value);
    }


  return (
    <input type="text" className="searchTerm" onChange={(e) => {onInputChange(e.target)}} />
  )
}

export default SearchBar