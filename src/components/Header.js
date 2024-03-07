import { LOGO_URL } from "../utils/constant";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";
import { CART_LOGO } from "../utils/constant";
export const Header=()=>{

    const[btnnameReact,setBtnName]=useState("Login")
    const data=useContext(Usercontext);
    console.log(data);
    const onlineStatus=useOnlineStatus();
    
    // subscribing to store using a selector
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);


    return (
        <div className=" sm:flex justify-between bg-white shadow-sm flex-wrap">
            <div className="logo-container">
                <img className="w-28 mx-auto" src= {LOGO_URL} ></img>
                  </div>
                  <div className="flex items-center">
                    <ul className="flex p-4 m-6">
                        <li className="px-4"> <Link to="/">Home</Link></li>
                        <li className="px-4"><Link to="/about">About Us</Link></li>
                        <li className="px-4"><Link to="/contact">Help</Link></li>
                        <li className="px-4 font-semibold"><Link to="/Cart">Cart-{cartItems.length}</Link></li>
                        <button className="px-4 border border-solid border-black rounded-lg bg-yellow-400"
                        onClick={()=>{
                         btnnameReact==='Login'? setBtnName("Logout"): setBtnName("Login");
                        }
                       }>
                       {btnnameReact}
                       </button>
                    </ul>

                  </div>
        </div>
    );
};
export default Header