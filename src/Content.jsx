import React, { useState } from 'react'
 import { FaTrashAlt } from 'react-icons/fa'
import Footer from './Footer';
import { Add } from './Add';
import { SearchItems } from './SearchItems';

const Content = () => {

const[items , setItems] = useState(JSON.parse(localStorage.getItem("shopinglist")));
const[search , setSearch] = useState("");
items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
 const handleCheck = (id) => {
   const listItems = items.map((item) =>(
    item.id === id ?{...item ,checked: !item.checked }:item
    ));
    setItems(listItems);
   localStorage.setItem('shopinglist', JSON.stringify(listItems))
   
 }
 const handleDelete = (id) => {
   const listItems = items.filter((item) => item.checked === false );
   setItems(listItems);
   localStorage.setItem('shopinglist', JSON.stringify(listItems))

   
 }

  return (
    <div className='content'>
        <Add
            items ={items}
            setItems={setItems} 
        />

        <SearchItems
            search={search}
            setSearch={setSearch}
        
        />     
        
   {
    items.length ? (<ul >

    {
        items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
             .map((item) => (
            <li key={item.id} className='item'>
                <input 
                onChange={() => handleCheck(item.id)}
                 type='checkbox'
                 checked={item.checked}
                />
                <label 
                style={(item.checked) ? {textDecoration:'line-through'}:null}
                onClick={() => handleCheck(item.id)}
                className='ms-2 lable2'
                >{item.item}</label>
                <FaTrashAlt 
                    role='button'
                    tabIndex='0'
                    onClick={() => handleDelete(item.id)}    
                />
            </li>
        ))
    }
    
    
       </ul>):(<div>Your list is empty </div>)
   }
 
    <Footer length = {items.length}
            listItems={"list items"} 
           />
    </div>
  )
}

export default Content