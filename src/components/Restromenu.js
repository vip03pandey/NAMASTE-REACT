import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

function Restromenu() {

    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);

    const [showIndex,setshowIndex]=useState(null)



  if (resInfo===null) return (<Shimmer/>);

  const {name,cuisines,costForTwoMessage,avgRating,totalRatingsString}=resInfo?.cards[0]?.card?.card?.info;
  // const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",);
  console.log(categories);
  return (
        <div className="text-center w-full ">

        <h1 className='font-bold my-2 text-2xl'>{name}</h1>
        <h5 className='font-semibold text-1xl my-4'>{cuisines.join(",")}-{costForTwoMessage}</h5>
        <div 
        className='border border-solid border-black flex-col m-auto py-2 rounded-xl w-20 my-6'>
        <div className=' text-green-600 font-bold border-b-2 px-2'>⭐️{avgRating}</div>
        <div className='text-xs text-gray-400'>{totalRatingsString}</div>
        </div>
       {/* {accordian} */}
       {categories.map((category,index)=>(
        // controlled component
       <RestaurantCategory 
       key={category?.card?.card.title} 
       data={category?.card?.card}
       showItems={index===showIndex ? true:false}
       setshowIndex={()=>setshowIndex(showIndex=== index ? null : index)}
        />
      ))}
    </div>
  )
}

export default Restromenu;
