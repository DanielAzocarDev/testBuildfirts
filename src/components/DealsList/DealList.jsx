import React, { useContext } from 'react'
import { DealCard } from '../DealCard/DealCard'
import { SearchContext } from '../../context/SearchContext'

export const DealList = () => {

  const { data } = useContext(SearchContext)
  return (
    <div className='DealList'>
      {data.map(provider => <DealCard {...provider} key={provider.id} />)}
    </div>
  )
}
