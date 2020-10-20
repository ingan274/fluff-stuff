import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "./style.css";
import logo from "../../assets/fullLogo.png"
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Grid } from '@material-ui/core';

const MainNav = () => (
  <Grid container direction="row" justify="space-between" className='nav'>
    <Grid container item direction="row" className='leftNav' xs={8}>
      <NavLink item="true" exact={true} to='/' ><img id='logo' src={logo} alt="fluff stuff logo" /></NavLink>
      <NavLink item="true" exact={true} to="/" activeClassName='selected' className='navigation right' id="home">home</NavLink>
      <NavLink item="true" to="/shop" activeClassName='selected' className='navigation right' id="shop">shop</NavLink>
      <NavLink item="true" to="/about" activeClassName='selected' className='navigation right' id="about">about</NavLink>
      <NavLink item="true" to="/contact" activeClassName='selected' className='navigation right' id="contact">contact</NavLink>
    </Grid>
    <Grid container item direction="row" xs={4} alignItems="center" justify="flex-end">
      
      <NavLink item="true" xs={6} className='navigation heart'  to="/favorites" activeClassName='selected' id="heart"><FavoriteIcon fontSize="small"/></NavLink>
      <NavLink item="true" xs={6}  to="/cart" activeClassName='selected' className='navigation cart' id="cart">cart</NavLink>
    </Grid>
  </Grid>
)

export default MainNav;