import React from 'react'
import ItemList from './ItemList'
import { useState } from "react";

function RestaurantCategory({data,showItems,setshowIndex}) {
    // const [showItems,setshowItems]=useState(false)

  const handleClick=()=>{
    // setshowItems(!showItems)
    setshowIndex();
  }
  return (
    <div className='w-[100vw'>
        <div className='sm:w-6/12 bg-gray-50 p-4 m-auto my-4 shadow-lg'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='font-semibold text-xl font-ProximaNova,arial,Helvetica Neue,sans-serif'>{data.title} ({data.itemCards.length}) </span>
            <span>⬇️</span>
            </div>
            {/* if show items is true then only it will show items */}
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
        {/* header */}
      {/* headre body*/}
      
    </div>
  )
}

export default RestaurantCategory
