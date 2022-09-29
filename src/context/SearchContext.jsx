import React, { createContext, useEffect, useState } from 'react'

import { dummyData } from '../data'

export const SearchContext = createContext({})
export const SearchProvider = ({ children }) => {

  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [sellers, setSellers] = useState([])

  const [atoz, setAtoz] = useState(false)
  const [ztoa, setZtoa] = useState(false)

  const handleChange = (e) => {

    const { value } = e.target
    setSearch(value)
  }

  const handleSubmit = () => {

    console.log(search)
  }

  const handleSortData = (e) => {
    const { name } = e.target
    let sorted = []

    switch (name) {
      case "atoz":
        setAtoz(true)
        setZtoa(false)
        sorted = data.sort((a, b) => a.provider < b.provider)
        setSortedData(sorted)
        break;
      case "ztoa":
        setZtoa(true)
        setAtoz(false)
        sorted = data.sort((a, b) => a.provider > b.provider)
        setSortedData(sorted)
        break;

      default:
        break;
    }
  }

  const handleSellersFilter = (e) => {
    const { name, checked } = e.target


    if (checked) {
      setSellers([
        ...sellers,
        name
      ])
    } else {
      let filtered = sellers.filter(seller => name !== seller)
      setSellers(filtered)
    }
  }

  const applyFilters = () => {

    if (sortedData.length !== 0) {
      setData(sortedData)
    } else {
      let newSellersArr = data.filter(item => sellers.filter(seller => item[seller] === seller) === item.provider)

      console.log(newSellersArr)
    }
  }


  useEffect(() => {
    setData(dummyData)
  }, [])

  useEffect(() => {
    if (search !== '') {
      let filterData = dummyData.filter(provider => search === provider.provider.toLowerCase())
      console.log(filterData, search)
      setData(filterData)
    } else if (search === '') {
      setData(dummyData)
    }
  }, [search])

  return (
    <SearchContext.Provider value={{ data, search, atoz, ztoa, handleChange, handleSubmit, handleSortData, handleSellersFilter, applyFilters }}>
      {children}
    </SearchContext.Provider>
  )
}
