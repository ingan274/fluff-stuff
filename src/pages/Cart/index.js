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

        if (JSON.parse(localStorage.getItem("Cart")) === null || JSON.parse(localStorage.getItem("Cart")).length === 0) {
            this.state = {
                products: [],
                localProds: [],
                cartQuant: 0,
                productTotal: "00.00",
                tax: "00.00",
                grandTotal: "00.00"
            }
        }
        // get from local storage, sort, and reorganize 
        else {
            let reOrg = [];
            let reOrgLocal = [];
            let cartTotal = 0;
            let productTotal = 0;
            let localStore = JSON.parse(localStorage.getItem("Cart"));

            for (let pillow of type) {
                let products = localStore.filter(items => items.type === pillow);
                if (products.length === 0) { continue }
                // console.log(products)
                for (let singleColor of colors) {
                    let colorPicked = products.filter(items => items.color === singleColor);
                    if (colorPicked.length === 0) { continue }
                    // console.log(colorPicked)
                    for (let singleFill of fills) {
                        let fill = colorPicked.filter(items => items.fill === singleFill);
                        if (fill.length === 0) { continue }
                        else if (fill.length > 0) {
                            // console.log(fill)
                            const prod_type = fill[0].type;
                            const colorLocal = fill[0].color;
                            const fillLocal = fill[0].fill;
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

                                // console.log(theQuant)

                            }
                            const prod_total = prod_cost * prod_quant;

                            const item = { 'quant': prod_quant, 'type': prod_type, 'color': prod_color, 'fill': prod_fill, "imgSrc": prod_imgSrc, "imgSize": prod_imgSize, "imgPosition": prod_imgPosition, "cost": prod_cost, "totalCost": prod_total }
                            const itemLocal = { 'quant': prod_quant, 'type': prod_type, 'color': colorLocal, 'fill': fillLocal, "imgSrc": prod_imgSrc, "imgSize": prod_imgSize, "imgPosition": prod_imgPosition, "cost": prod_cost, "totalCost": prod_total }

                            reOrg.push(item)
                            reOrgLocal.push(itemLocal)
                        }
                    }
                }
            }


            for (let productType of reOrg) {
                productTotal += productType.totalCost;
            }

            // console.log(cartTotal)

            const tax = (productTotal * 0.06).toFixed(2);
            const totalOfBag = (productTotal + parseFloat(tax)).toFixed(2);
            productTotal = productTotal.toFixed(2);

            this.state = {
                products: reOrg,
                localProds: reOrgLocal,
                cartQuant: cartTotal,
                productTotal: productTotal,
                tax: tax,
                grandTotal: totalOfBag
            }

        }
    };

    // Remove item from cart
    removeItem = (event) => {
        const index = parseInt(event.target.attributes.name.value);
        const localProds = this.state.localProds
        const products = this.state.products
        let quant;
        // console.log(this.state.cartQuant)
        // console.log(products[index].quant)

        // Update Quantity -> with existing arrays
        if (index === 0 && this.state.cartQuant === 1) {
            quant = 0;
        } else {
            quant = this.state.cartQuant - products[index].quant;
        }
        // Updated and remove item from array
        products.splice(index, 1);
        localProds.splice(index, 1);
        // Updated states and call cart re-render
        this.setState({
            products: products,
            localProds: localProds,
            cartQuant: quant
        }, function () {
            this.cartItems();
        })

        // If Quant is 0 => reset costs
        if (quant === 0) {
            this.setState({
                productTotal: "00.00",
                tax: "00.00",
                grandTotal: "00.00"
            })
        }

        // Updated local storage and call cart number re-render in nav
        localStorage.setItem("Cart", JSON.stringify(localProds));
        this.props.cartUpdate();
    }

    // If there are items, Else no cart message
    cartItems = () => {
        if (this.state.cartQuant === 0) {
            return <Grid item container direction="column" justify="center" alignItems="center" spacing={3} id="emptyCart">
                <Box item="true" className="emptyCartFaveText">Your Cart is Empty</Box>
                <Grid item><Link to="/shop" className='cartButtonShop'>back to shop</Link></Grid>
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
                            fill={item.fill}
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
            localStorage.setItem("Prices", JSON.stringify({ 'productTotal': this.state.productTotal, 'tax': this.state.tax, 'total': this.state.grandTotal }));
            localStorage.setItem("Cart", JSON.stringify(this.state.localProds));
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

                        <Grid item container className="cartTotal" directon="row" justify="space-between">
                            <Grid item xs={3} m={3} className="checkoutNotes">
                                <Box>FREE Exchanges &amp; Easy Returns</Box>
                                <Box>Fluff Stuff has Secure Transactions</Box>
                                <Box>Questions? <Link to="/contact" className="contactUsLink"> Contact Us </Link></Box>
                            </Grid>
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
                                <Box item="true" xs={3} m={3}>
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