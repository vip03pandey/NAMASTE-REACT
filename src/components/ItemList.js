import React from 'react'
import { CDN_URL } from '../utils/constant'

function ItemList({items}) {
  return (
      <div>
        {
            items.map(item=>(
            <div className='flex justify-between border-b-2'>
            <div key={item.card.info.id} className='p-2 m-2  text-left'>
                <div className='py-1 flex-col'>
                    <div className='font-medium'>{item.card.info.name}</div> 
                    <div className='text-sm'> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</div> 
                    </div>
                <p className='text-xs font-light text-gray-400'>{item.card.info.description}</p>
            </div>
            <div className='relative ml-[16px] h-[120px] min-w-[118px] p-2'>
            <div className='absolute left-[50%] bottom-[8px] translate-x-[-50%] z-10'>
            <button className=' bg-white shadow-lg m-auto p-1 rounded-md text-[#60b246] font-medium relative w-[96px] min-h-[36px] text-[0.9rem]'>ADD +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className='w-full h-[96px] rounded '></img>
            </div>
            </div>
            ))}
      </div>
  )
}

export default ItemList
