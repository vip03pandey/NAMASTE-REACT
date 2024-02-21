import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
export const Header=()=>{

    const[btnnameReact,setBtnName]=useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} ></img>
                  </div>
                  <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
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