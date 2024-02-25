import Restrocard from "./Restrocard"
import useOnlineStatus from "../utils/useOnlineStatus"

import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
//State Variable -- super powerful variable

const Body =()=>{
    const [listOFRestro,setListofRestro]=useState([]);
    const [searchText,setsearchText]=useState("");
    const [filteredRestro,setfilteredRestro]=useState([])


    useEffect(()=>{
        fetchData();
    },[]);


    // fetching data from API
    const fetchData= async()=> {
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();
        console.log(json);
         setListofRestro(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilteredRestro(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false)
    return (
    <h1>Check your internet</h1>
    );
    // conditional rendering
  
    return listOFRestro.length === 0 ?(
        <Shimmer/>):(
        <div className="body">

            {/* filter-button */}
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" className="search-box" 
                    value={searchText} 
                    onChange={(e)=>setsearchText(e.target.value)}>
                    </input>
                    <button onClick={()=>{
                        const filteredRestro=(listOFRestro.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        setsearchText(" ");
                        setfilteredRestro(filteredRestro);
                        }}
                    >Search</button>
                </div>
                
                
                <button 
                className="filter-btn" 
                onClick={()=>{
                    // const filteredList=listOFRestro.filter(
                    //     (res) => res.info.avgRating >4.2
                    //     );
                    //     console.log(listOFRestro);
                    //     setListofRestro(filteredList);

                    setfilteredRestro(filteredRestro.filter((res)=>res.info.avgRating >4))


                    }} 
                >Top Rated Restaurant
                </button>

            </div>

            <div className="rest-conatiner">
                   {
                    filteredRestro.map((restaurant)=>
                    (<Link to={"/restaurant/"+ restaurant.info.id}> <Restrocard key={restaurant.info.id} resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body
