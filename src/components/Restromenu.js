import React from 'react'
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constant';
import { useParams } from 'react-router-dom';

function Restromenu() {

    const[resInfo,setresInfo]=useState(null);
    const {resId}=useParams();
    // console.log(resId)

   useEffect(()=>{
       fetchMenu();
   },[])
    const fetchMenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId="+resId);
    const json=await data.json();
    setresInfo(json.data);
    console.log(json)

 };
  if (resInfo===null) return (<Shimmer/>);

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  console.log(name)
  const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards[13].card.info.name)
  return (
        <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join("")}-{costForTwoMessage}</p>
        <ul>
        {itemCards && itemCards.map((item) => (
         <li key={item.card.info.id}>
        {item.card.info.name}- Rs{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
        </li>
        ))}
        </ul>
    </div>
  )
}

export default Restromenu;
