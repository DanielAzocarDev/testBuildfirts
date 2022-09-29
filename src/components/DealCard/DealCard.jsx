import React from 'react'

export const DealCard = ({ provider, discount, save, description }) => {
  return (
    <div className='dealcard'>
      <div>
        <div>Logo</div>
        <h3>{provider}</h3>
      </div>
      <div className='dealcontent'>
        <h4>{discount}</h4>
        <p>{save}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
