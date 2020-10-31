import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import CheckoutCard from "../../components/CheckoutCard";
import CheckoutSubNav from "../../components/CheckoutSubNav";
import {
    Link,
} from "react-router-dom";

class Checkout extends Component {
    constructor(props) {
        super(props);

        const localCart = JSON.parse(localStorage.getItem("Cart"));
        const prices = JSON.parse(localStorage.getItem("Prices"));
        let shipping;
        const total = parseFloat(prices.total)
        const tax = parseFloat(prices.total)
        const productTotal = parseFloat(prices.productTotal)
        if (total > 50) {
            shipping = 0.00;
        } else {
            shipping = total * 0.08
        }

        const grandTotal = total + shipping;

        this.state = {
            cart: localCart,
            grandTotal: grandTotal,
            product: productTotal,
            tax: tax,
            shipping: shipping,

            fName: "",
            lName: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipcode: "",
            phone: "",
            email: ""
        }

    };

    // rendering the cart items
    sideCart = () => {
        return (
            <Grid item container direction="column" className="cartDiv" spacing={2} xs={4}>
                {this.state.cart.map((item, index) => (
                    <CheckoutCard
                        key={index.toString()}
                        location={index}
                        imgSrc={item.imgSrc}
                        imgSize={item.imgSize}
                        imgPosition={item.imgPosition}
                        product={item.type}
                        color={item.color}
                        fill={item.fill}
                        prodCost={item.cost}
                        quant={item.quant}
                        prodTotal={item.quant * item.cost}
                    />
                ))}
                <Grid item>Subtotal: ${this.state.product}</Grid>
                <Grid item>Tax: ${this.state.tax}</Grid>
                <Grid item>Shipping: ${this.state.shipping}</Grid>
                <Grid item>Total: ${this.state.grandTotal}</Grid>
            </Grid>
        )
    }

    // capturing the form

    // submitting the form

    render = () => {
        return (
            <div>
                <CheckoutSubNav />
                <h1 className='pageHeader'>checkout</h1>
                <Box px={4} py={3}>
                    <Grid container spacing={2} direction="row">
                        <Grid item xs={8}>

                        </Grid>

                        {this.sideCart()}

                    </Grid>
                </Box>
            </div>
        )
    }
}

export default Checkout;