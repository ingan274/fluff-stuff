
import React from "react";
import {
    NavLink,
} from "react-router-dom";
import "./style.css";
import logo from "../../assets/fullLogo.png"


const MainNav = () => (
    <nav className='nav row'>
        <div className='col-2'>
            <NavLink exact={true} to='/cart' >BACK TO CART</NavLink>
            <img id='logo' src={logo} alt="fluff stuff logo" />
        </div>
    </nav>
)

export default MainNav;