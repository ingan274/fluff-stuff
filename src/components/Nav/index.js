import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "./style.css";
import logo from "../../assets/fullLogo.png"

const MainNav = () => (
        <nav className='nav row'>
          <div className='leftNav col-10'>
            <NavLink exact={true} to='/' ><img id='logo' src={logo} alt="fluff stuff logo" /></NavLink>
            <NavLink exact={true} to="/" activeClassName='selected' className='navigation right' id="home">home</NavLink>
            <NavLink to="/shop" activeClassName='selected' className='navigation right' id="shop">shop</NavLink>
            <NavLink to="/about" activeClassName='selected' className='navigation right' id="about">about</NavLink>
            <NavLink to="/contact" activeClassName='selected' className='navigation right' id="contact">contact</NavLink>
          </div>
          <p className='navigation cart col-2'>cart</p>
        </nav>
)

export default MainNav;