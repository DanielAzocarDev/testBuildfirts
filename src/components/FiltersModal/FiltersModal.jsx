import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { RadioInput } from '../RadioInput/RadioInput'
import { dummyData } from '../../data'

export const FiltersModal = ({ close }) => {

  const { atoz, ztoa, handleSellersFilter, applyFilters } = useContext(SearchContext)
  return (
    <div className='overlay'>
      <div className='Modal' >
        <div>
          <button onClick={close}>close</button>
        </div>
        <div>
          <div className='sort'>
            <RadioInput name="atoz" value='A to Z' isChecked={atoz} />
            <RadioInput name="ztoa" value='Z to A' isChecked={ztoa} />

          </div>
          <div className='seller'>
            <div>
              <h4>Sellers</h4>
              {dummyData.map(element => <div key={element.id}>
                <input type="checkbox" name={element.provider} value={element.provider} onChange={handleSellersFilter} />
                <label htmlFor={element.provider}>{element.provider}</label>
              </div>)}
            </div>
          </div>
          <div className='categories'>
            <div>
              <h4>Title</h4>
              <input type="checkbox" name="Type 1" />
              <input type="checkbox" name="Type 2" />
              <input type="checkbox" name="Type 3" />
              <input type="checkbox" name="Type 4" />
            </div>
          </div>
        </div>

        <div>
          <button>Clear Filters</button>
          <button onClick={applyFilters}>Apply Filters</button>
        </div>

      </div>
    </div>
  )
}
