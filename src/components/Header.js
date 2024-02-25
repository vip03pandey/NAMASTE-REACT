import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header=()=>{

    const[btnnameReact,setBtnName]=useState("Login")

    const onlineStatus=useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} ></img>
                  </div>
                  <div className="nav-items">
                    <ul>
                        <li>Online Status:{onlineStatus?"✅":"❌"}</li>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li>Cart</li>
                        <button 
                        className="login" 
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