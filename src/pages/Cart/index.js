import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import ProductLine from "../../components/CartProduct";
import {
    Link,
} from "react-router-dom";

class Contact extends Component {
    state = {
        cartTotal: 0,
        ProductTotal: 0,
        products: [],
    }

    // get from local storage, sort, and reorgnize
    getAndReOrg = () => {
        const type = ['bed pillow', 'couch pillow', 'round pillow', 'floor pouf pillow'];
        const colors = ['ASS', 'MH', 'CD', 'RD'];
        const fills= ['DD', 'HPB', 'MF']

        if (JSON.parse(localStorage.getItem("Cart")) === null) {
            return;
        } else {
            let reOrg = [];
            let localStore = JSON.parse(localStorage.getItem("Cart"));

            for (let pillow of type) {
                let products = localStore.filter(items => items.type === pillow);
                if (products.length === 0) { return }

                for (let singleColor of colors) {
                    let color = products.filter(items => items.color === singleColor);
                    if (color.length === 0) { return }

                    for (let singleFill of fills) {
                        let fill = color.filter(items => items.fill === singleFill);
                        if (fill.length === 0) { return }
                        else if (fill.length > 1) {
                            
                        }

                    }
                }
                
                

            }

        }
    }

    // Remove item from cart

    // change quantity of item

    // calculate total cost

    // calculate subrtotal cost

    // If there are items, Else no cart message
    cartItems = () => {
        if (this.state.cartTotal === 0) {
            return <Grid item container direction="column" justify="center" alignItems="center" id="emptyCart">
                <Box item="true" className="emptyCartText">Your Cart is Empty</Box>
                <Grid><Link to="/shop" className='cartButtonShop'>back to shop</Link></Grid>

            </Grid>
        } else {
            return <ProductLine />
        }

    }

    // checkout Button if items in cart
    checkOutButton = () => {
        if (this.state.cartTotal > 0) {
            return <Link to="/checkout" className='checkout'>checkout</Link>
        }
    }

    render = () => (
        <div>
            <h1 className='pageHeader'>your cart</h1>
            <Box className="cartDiv" p={3}>
                <Grid container spacing={2} direction="column">
                    <Grid item container className="cartHeader" directon="row">
                        <Grid item xs={3} className="headerLabel">Item</Grid>
                        <Grid item xs={3} className="headerLabel">Color + fill</Grid>
                        <Grid item xs={2} className="headerLabel">Item Cost</Grid>
                        <Grid item xs={2} className="headerLabel">Quantity</Grid>
                        <Grid item xs={2} className="headerLabel">Product Total</Grid>
                    </Grid>

                    {this.cartItems()}

                    <Grid item container className="cartTotal" directon="row">
                        <Grid item xs={9} ></Grid>
                        <Grid container item xs={3} direction='column' className="totalArea">
                            <Grid item container direction="row" className="total prodTotal" justify='space-between'>
                                <Box item="true" className='totalLabel'>Subtotal:</Box>
                                <Box item="true" className='totalCostNum'>$00.00</Box>
                            </Grid>
                            <Grid item container direction="row" className="total tax" justify='space-between'>
                                <Box item="true" className='totalLabel'>tax:</Box>
                                <Box item="true" className='totalCostNum'>$0.00</Box>
                            </Grid>
                            <Grid item container direction="row" className="total grandTotal" justify='space-between'>
                                <Box item="true" className='totalLabel'>Total:</Box>
                                <Box item="true" className='totalCostNum badTotal'>$00.00</Box>
                            </Grid>
                            <Grid item>
                                {this.checkOutButton()}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Contact;