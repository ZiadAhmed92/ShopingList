import React, { useState } from 'react'

export const SearchItems = ({setSearch,search }) => {
    
    console.log(search)
  return (
    <div className='w-100'>
        <input type='search'
               placeholder='Search'
               className='search p-1  ' 
               value={search}
               onChange={(e) => setSearch(e.target.value)}    
        
        
        />
        
    </div>
  )
}
