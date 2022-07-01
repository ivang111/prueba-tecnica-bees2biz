import React, { useState } from 'react'
import "./Searchbar.css"

export default function Saerchbar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form className='search-bar' onSubmit={(e) => {
        e.preventDefault();
        onSearch(city)
    }}>
        <input type="text" name="search" required value={city} 
        onChange={e => setCity(e.target.value)} 
        />
        <button className='search-btn' type="submit" value="add">
          <span>Search</span>
        </button>
    </form>
  )
}