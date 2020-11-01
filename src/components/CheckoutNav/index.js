
import React, {Component} from "react";
import {
    NavLink,
} from "react-router-dom";
import "./style.css";
import { Grid, Box } from '@material-ui/core';
import logo from "../../assets/fullLogo.png"


class CheckoutNav extends Component {

    render = () => {
        let itemsInCart;
        if (this.props.cartNum > 0) {
            itemsInCart = <span id="cartNum">{this.props.cartNum}</span>
        }


        return (
            <Grid container direction="row" justify="space-between" alignItems="center" className="nav">
                <Box xs={2}>
                    <img id='logo' src={logo} alt="fluff stuff logo" />
                </Box>
                <Box xs={2}>
                    <NavLink item="true" xs={6} to="/cart" activeClassName='cartselected' className='navigation cart' id="cart">cart {itemsInCart}</NavLink>
                </Box>
            </Grid>

        )
    }

}

export default CheckoutNav;