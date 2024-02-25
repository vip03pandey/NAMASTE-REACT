import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

function Restromenu() {

    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);



  if (resInfo===null) return (<Shimmer/>);

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
        <div className='menu'>
        <h1>{name}</h1>
        <h5>{cuisines.join(",")}-{costForTwoMessage}</h5>
        <ul>
        {itemCards && itemCards.map((item) => (
         <li key={item.card.info.id} >
          <div>{item.card.info.name} </div> 
          <p>Rs {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p> 
        </li>
        ))}
        </ul>
    </div>
  )
}

export default Restromenu;
