import React, { useState } from 'react'
import { SearchBar } from '../SearchBar/SearchBar'

export const Navbar = () => {

  const [search, setSearch] = useState('')

  const handleChange = (e) => {

    const { value } = e.target
    setSearch(value)
  }

  const handleSubmit = () => {

    console.log(search)
  }

  return (
    <nav>
      <div style={{
        width: "80%",
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div>
          Logo
        </div>

        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </nav>
  )
}
