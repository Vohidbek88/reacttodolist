import { useState } from 'react'
import './search-panel.css'

const SearchPanel = ({searchHandler,listdata}) => {
  return (
    <div className='text-center pt-2'>
      <input type="text" placeholder={`${listdata.length} Items in search...`}  className="input-search" onChange={(e)=>searchHandler(e.target.value)}/>
    </div>
  )
}

export default SearchPanel
