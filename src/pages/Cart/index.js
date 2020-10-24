import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import ProductLine from "../../components/CartProduct";
import {
    Link,
} from "react-router-dom";

class Cart extends Component {
    constructor(props) {
        super(props);
        const type = ['bed pillow', 'couch pillow', 'round pillow', 'floor pouf pillow'];
        const colors = ['ASS', 'MH', 'CD', 'RD'];
        const fills = ['DD', 'HPB', 'MF']

        if (JSON.parse(localStorage.getItem("Cart")) === null) {
            this.state = {
                products: [],
                cartQuant: 0,
                productTotal: "00.00",
                tax: "00.00",
                grandTotal: "00.00"
            }
        }
        // get from local storage, sort, and reorgnize 
        else {
            let reOrg = [];
            let cartTotal = 0;
            let productTotal = 0;
            let localStore = JSON.parse(localStorage.getItem("Cart"));

            for (let pillow of type) {
                let products = localStore.filter(items => items.type === pillow);
                if (products.length === 0) { continue }

                for (let singleColor of colors) {
                    let color = products.filter(items => items.color === singleColor);
                    if (color.length === 0) { continue }

                    for (let singleFill of fills) {
                        let fill = color.filter(items => items.fill === singleFill);
                        if (fill.length === 0) { continue }
                        else if (fill.length > 0) {

                            const prod_type = fill[0].type;
                            let prod_color;
                            let prod_fill;
                            const prod_imgSrc = fill[0].imgSrc;
                            const prod_imgSize = fill[0].imgSize;
                            const prod_imgPosition = fill[0].imgPosition;
                            const prod_cost = fill[0].cost;

                            switch (fill[0].color) {
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

                            switch (fill[0].fill) {
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

                            let prod_quant = 0;
                            for (let item of fill) {
                                let theQuant = item.quant;
                                prod_quant += theQuant;
                                cartTotal += theQuant

                            }
                            const prod_total = prod_cost * prod_quant;



                            const item = { 'quant': prod_quant, 'type': prod_type, 'color': prod_color, 'fill': prod_fill, "imgSrc": prod_imgSrc, "imgSize": prod_imgSize, "imgPosition": prod_imgPosition, "cost": prod_cost, "totalCost": prod_total }
                            reOrg.push(item)
                        }
                    }
                }
            }

            for (let productType of reOrg) {
                productTotal += productType.totalCost;
            }

            const tax = (productTotal * 0.06).toFixed(2);
            const totalOfBag = (productTotal + parseFloat(tax)).toFixed(2);
            productTotal = productTotal.toFixed(2);

            this.state = {
                products: reOrg,
                cartQuant: cartTotal,
                productTotal: productTotal,
                tax: tax,
                grandTotal: totalOfBag
            }
        }
    };
    // Remove item from cart
    removeItem = (event) => {
        const index = event.target.attributes.name.value;
        const item = this.state.products[index]
        const removeItem = item.type;
        const removeColor = item.color;
        const removeFill = item.fill;
        
        let localStore = JSON.parse(localStorage.getItem("Cart"));

        let removeIndex = [];
        for (let i = 0; i < localStore.length; i++) {
            if (localStore[i].item === removeItem && localStore[i].color === removeColor && localStore[i].fill === removeFill) {
                console.log(i)
            }
        }

        console.log(removeIndex)
        for (let index of removeIndex) {
            localStore.splice(index,1)
        }

        localStorage.setItem("Cart", JSON.stringify(localStore));
        
    }

    // If there are items, Else no cart message
    cartItems = () => {
        if (this.state.cartTotal === 0) {
            return <Grid item container direction="column" justify="center" alignItems="center" id="emptyCart">
                <Box item="true" className="emptyCartText">Your Cart is Empty</Box>
                <Grid><Link to="/shop" className='cartButtonShop'>back to shop</Link></Grid>
            </Grid>
        } else {
            // console.log(this.state.products)
            return (
                <Grid item container direction="column" spacing={2}>
                    {this.state.products.map((item, index) => (
                        <ProductLine
                            key={index.toString()}
                            location={index}
                            imgSrc={item.imgSrc}
                            imgSize={item.imgSize}
                            imgPosition={item.imgPosition}
                            product={item.type}
                            color={item.color}
                            fill={item.fill} s
                            prodCost={item.cost}
                            quant={item.quant}
                            prodTotal={item.totalCost}
                            removeItem={this.removeItem}
                        />
                    ))}
                </Grid>
            )
        }
    }

    // checkout Button if items in cart
    checkOutButton = () => {
        if (this.state.cartQuant > 0) {
            return <Link to="/checkout" className='cartButtonShop'>checkout</Link>
        }
    }

    render = () => {
        return (
            <div>
                <h1 className='pageHeader'>your cart</h1>
                <Box className="cartDiv" px={4} py={3}>
                    <Grid container spacing={2} direction="column">
                        <Grid item container spaceing={3} className="cartHeader" directon="row">
                            <Grid item xs={4} className="headerLabel">Item</Grid>
                            <Grid item xs={3} className="headerLabel">Color + fill</Grid>
                            <Grid item xs={2} className="headerLabel">Item Cost</Grid>
                            <Grid item xs={1} className="headerLabel">Quantity</Grid>
                            <Grid item xs={2} className="headerLabel">Total</Grid>
                        </Grid>

                        {this.cartItems()}

                        <Grid item container className="cartTotal" directon="row">
                            <Grid item xs={9} ></Grid>
                            <Grid container item xs={3} direction='column' className="totalArea" alignItems='center'>
                                <Grid item container direction="row" className="total prodTotal" justify='space-between'>
                                    <Box item="true" className='totalLabel'>Subtotal:</Box>
                                    <Box item="true" className='totalCostNum'>${this.state.productTotal}</Box>
                                </Grid>
                                <Grid item container direction="row" className="total tax" justify='space-between'>
                                    <Box item="true" className='totalLabel'>tax:</Box>
                                    <Box item="true" className='totalCostNum'>${this.state.tax}</Box>
                                </Grid>
                                <Grid item container direction="row" className="total grandTotal" justify='space-between'>
                                    <Box item="true" className='totalLabel'>Total:</Box>
                                    <Box item="true" className='totalCostNum badTotal'>${this.state.grandTotal}</Box>
                                </Grid>
                                <Box item="true" m={3}>
                                    {this.checkOutButton()}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}

export default Cart;