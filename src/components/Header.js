import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header=()=>{

    const[btnnameReact,setBtnName]=useState("Login")

    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-white shadow-sm m-2">
            <div className="logo-container">
                <img className="w-28" src= {LOGO_URL} ></img>
                  </div>
                  <div className="flex items-center">
                    <ul className="flex p-4 m-6">
                        <li className="px-4"> <Link to="/">Home</Link></li>
                        <li className="px-4"><Link to="/about">About Us</Link></li>
                        <li className="px-4"><Link to="/contact">Help</Link></li>
                        <li className="px-4">Cart</li>
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