import React from 'react'
import { DealList } from '../../components/DealsList/DealList'
import { Navbar } from '../../components/Navbar/Navbar'

export const Homepage = () => {
  return (
    <div>
      <Navbar />

      <DealList />
    </div>
  )
}
