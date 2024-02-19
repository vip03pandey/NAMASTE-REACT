import Restrocard from "./Restrocard"
import resList from "../utils/mockdata"

import { useState } from "react"

//State Variable -- super powerful variable

const Body =()=>{
    const [listOFRestro,setListofRestro]=useState(resList)

    return (
        <div className="body">

            {/* filter-button */}
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredList=listOFRestro.filter(
                        (res) => res.info.avgRating >4.2
                        );
                        console.log(listOFRestro);
                        setListofRestro(filteredList);
                    }}
                >Top Rated Restaurant</button>
            </div>

            <div className="rest-conatiner">
                {/* Restro Card as a new Component */}
                {/* <Restrocard resData={resList[0]}/>
                <Restrocard resData={resList[1]}/>
                <Restrocard resData={resList[2]}/>
                <Restrocard resData={resList[3]}/>
                <Restrocard resData={resList[4]}/>
                <Restrocard resData={resList[5]}/>
                <Restrocard resData={resList[6]}/> */}
                {/* <Restrocard resName="KFC" cuisine="Burger,Pizza"/> */}


                {
                    listOFRestro.map((restaurant)=>
                    (<Restrocard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body
