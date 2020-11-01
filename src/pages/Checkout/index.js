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
        let shipping = 0;
        const total = parseFloat(prices.total)
        const tax = parseFloat(prices.total)
        const productTotal = parseFloat(prices.productTotal)
        if (total > 50) {
            shipping = (0).toFixed(2);
        } else {
            shipping = (total * 0.08).toFixed(2);
        }
        const grandTotal = (total + parseFloat(shipping)).toFixed(2);

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
            <Grid item container direction="column" className="cartDiv" spacing={2}>
                {this.state.cart.map((item, index) => {
                    let prod_color;
                    let prod_fill;

                    switch (item.color) {
                        case ("ASS"):
                            prod_color = "After School Special";
                            break;
                        case ("MH"):
                            prod_color = "Morning Haze";
                            break;
                        case ("CD"):
                            prod_color = "Cozy Denim";
                            break;
                        case ("RD"):
                            prod_color = "Rainy Day";
                            break;
                        default:
                            prod_color = "After School Special"
                    }

                    switch (item.fill) {
                        case ("DD"):
                            prod_fill = "Duck Down";
                            break;
                        case ("HPB"):
                            prod_fill = "Hypoallergenic Poly-Blend";
                            break;
                        case ("MF"):
                            prod_fill = "Memory Foam";
                            break;
                        default:
                            prod_fill = "Duck Down"
                    }
                    return (
                        <CheckoutCard
                            key={index.toString()}
                            location={index}
                            imgSrc={item.imgSrc}
                            imgSize={item.imgSize}
                            imgPosition={item.imgPosition}
                            product={item.type}
                            color={prod_color}
                            fill={prod_fill}
                            prodCost={item.cost}
                            quant={item.quant}
                            prodTotal={item.quant * item.cost}
                        />
                    )
                })}
                <Grid item container direction="column" spacing={1}>
                    <Grid item container justify="space-between" className="checkoutPrice"><span>Subtotal:</span><span>${this.state.product}</span></Grid>
                    <Grid item container justify="space-between" className="checkoutPrice"><span>Tax:</span><span>${this.state.tax}</span></Grid>
                    <Grid item container justify="space-between" className="checkoutPrice"><span>Shipping:</span><span>${this.state.shipping}</span></Grid>
                    <Grid item container justify="space-between" className="checkoutPrice checkoutTotal"><span>Total:</span><span>${this.state.grandTotal}</span></Grid>
                </Grid>
            </Grid>
        )
    }

    // capturing the form

    // submitting the form

    render = () => {
        return (
            <div>
                <CheckoutSubNav 
                checkout1="#5C64A2"
                checkout2="#A8A8A8"
                checkout3="#A8A8A8"
                />
                <h1 className='pageHeader'>checkout</h1>
                <Box px={4} py={3}>
                    <Grid container spacing={2} direction="row" justify="space-between">
                        <Grid item xs={7}>
                            <form>
                                <Grid container direction="row" justify="space-around" spacing={3}>
                                    <div className='nameinput'>
                                        <label htmlFor="fname">First name</label><br />
                                        <input type="text" id="fname" name="fname" required />
                                    </div>
                                    <div className='nameinput'>
                                        <label htmlFor="lname">Last name</label><br />
                                        <input type="text" id="lname" name="lname" required />
                                    </div>
                                </Grid>

                                <label htmlFor="add1">Address</label><br />
                                <input type="text" id="add1" name="add1" required />

                                <label htmlFor="add2" id="add2title">Address Line 2 (optional)</label><br />
                                <input type="text" id="add2" name="add2" />

                                <Grid container direction="row" justify="space-around" spacing={2}>
                                    <div className='citystatezip'>
                                        <label htmlFor="city">City</label><br />
                                        <input type="text" id="city" name="city" required />
                                    </div>
                                    <div className='citystatezip'>
                                        <label htmlFor="state">State</label><br />
                                        <input type="text" id="state" name="state" required />
                                    </div>
                                    <div className='citystatezip'>
                                        <label htmlFor="zip">Zip</label><br />
                                        <input type="text" id="zip" name="zip" required />
                                    </div>
                                </Grid>

                                <br />
                                <label htmlFor="email">Email</label><br />
                                <input type="text" id="email" name="email" required />
                                <label htmlFor="phone">Phone Number</label><br />
                                <input type="text" id="email" name="phone" required />
                            </form>
                        </Grid>
                        <Grid item container direction="column" xs={4} >
                            <div className="checkoutCartTitle">Cart</div>
                            {this.sideCart()}
                            <Link to="/checkout/payment" className='cartButtonShop checkoutToPayment'>proceed to payment</Link>
                        </Grid>
                    </Grid>
                </Box>
                <footer></footer>
            </div>
        )
    }
}

export default Checkout;