import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { FiltersModal } from '../FiltersModal/FiltersModal'

export const SearchBar = () => {

  const { handleChange, handleSubmit } = useContext(SearchContext)

  const [modal, setModal] = useState(false)
  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>icono</button>
      </div>
      <button onClick={() => setModal(!modal)}>
        filtros
      </button>
      {modal && <FiltersModal close={() => setModal(!modal)} />}
    </div>
  )
}
