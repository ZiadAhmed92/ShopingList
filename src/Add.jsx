import React, { useState } from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'
export const Add = ({items , setItems}) => {
 const [newitems , setNewitems] = useState("")
 const inputRef = useRef();
 const addItems =(item) =>{

   const id = items.length ? items[items.length-1].id + 1 : 1 ;
   const myNewItem ={ id , checked:false ,item };
   const listItems = [...items , myNewItem];
   setItems(listItems)
   localStorage.setItem('shopinglist', JSON.stringify(listItems))
 }

  const handleSubmit = (e)=>{
     e.preventDefault();
     if(!newitems) return ;
     addItems(newitems)
     console.log(items)
     setNewitems("") 
  }

  return (
   
        <form onSubmit={handleSubmit} className='form w-100'>
             
              <input type='text'
                     placeholder='Add Items'
                     id="add"
                     value={newitems}
                     onChange={(e) => setNewitems(e.target.value)}
                     ref={inputRef}
                        />
              <button className='btn-add'
                      onClick={() => inputRef.current.focus()}
                      > <FaPlus /></button>          

        </form>


  )
}
