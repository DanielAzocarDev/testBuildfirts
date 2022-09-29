import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

export const RadioInput = ({ name, value, isChecked }) => {
  const { handleSortData } = useContext(SearchContext)
  return (
    <div>
      <input type="radio" name={name} id={name} value={value} onClick={handleSortData} checked={isChecked} />
      <label htmlFor={name}>{value}</label>
    </div>
  )
}
