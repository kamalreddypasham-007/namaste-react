import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    const[btn,setBtn]=useState("login");
    return(<div className="header">
        <div className="logo-container">
        <img  className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items"> 
            <ul>
             <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactus">Contact us</Link></li>
            <li>Cart</li>
                <button onClick={()=>{
                    btn==="login"?setBtn("logout"):setBtn("login")

                }}>{btn}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;