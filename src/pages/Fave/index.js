import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import Favecard from "../../components/FavesCard";
import {
    Link,
} from "react-router-dom";

class Fave extends Component {
    constructor(props) {
        super(props);
        const type = ['bed pillow', 'couch pillow', 'round pillow', 'floor pouf pillow'];
        const colors = ['ASS', 'MH', 'CD', 'RD'];
        const fills = ['DD', 'HPB', 'MF']

        if (JSON.parse(localStorage.getItem("Cart")) === null) {
            this.state = {
                faved: [],
                localFaves:[],
                faveQuant: 0
            }
        }
        // get from local storage, sort, and reorgnize 
        else {
            let reOrg = [];
            let reOrgLocal = [];
            let localStore = JSON.parse(localStorage.getItem("Favorite"));

            for (let pillow of type) {
                let products = localStore.filter(items => items.type === pillow);
                if (products.length === 0) { continue }

                for (let singleColor of colors) {
                    let colorPicked = products.filter(items => items.color === singleColor);
                    if (colorPicked.length === 0) { continue }
                    
                    for (let singleFill of fills) {
                        let fill = colorPicked.filter(items => items.fill === singleFill);
                        if (fill.length === 0) { continue }
                        else if (fill.length > 0) {

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

                            const item = {'type': prod_type, 'color': prod_color, 'fill': prod_fill, "imgSrc": prod_imgSrc, "imgSize": prod_imgSize, "imgPosition": prod_imgPosition, "cost": prod_cost}
                            const itemLocal = { 'type': prod_type, 'color': colorLocal, 'fill': fillLocal, "imgSrc": prod_imgSrc, "imgSize": prod_imgSize, "imgPosition": prod_imgPosition, "cost": prod_cost}
                          
                            reOrg.push(item)
                            reOrgLocal.push(itemLocal)
                        }
                    }
                }
            }
            // console.log(reOrg)
            this.state = {
                faved: reOrg,
                localFaves:reOrgLocal,
                faveQuant: reOrg.length
            }

        }
    };

    // Remove item from cart
    removeItem = (event) => {
        const index = parseInt(event.target.attributes.name.value);
        const localFaves = this.state.localFaves
        const faved = this.state.faved
        faved.splice(index, 1);
        localFaves.splice(index, 1);

        this.setState({
            faved: faved,
            localFaves: localFaves,
        }, function () {
            this.faveItems();
        })

        localStorage.setItem("Favorite", JSON.stringify(localFaves));
    }

    addFaves2Cart = (event) => {
        console.log(event.target.attributes)
        let list = []
        const cost = parseInt(event.target.attributes.cost.value);
        const product = event.target.attributes.product.value;
        let fill; 
        const background = event.target.attributes.background.value;
        const backgroundSize = event.target.attributes.backgroundsize.value;
        const backgroundPosition = event.target.attributes.backgroundposition.value ;
        let color;
        // console.log("cost", cost)
        // console.log("product", product)
        // console.log("fill", fill)
        // console.log("background", background)
        // console.log("backgroundSize", backgroundSize)
        // console.log("backgroundPosition", backgroundPosition)
        // console.log("color", color)
        switch (event.target.attributes.pillowcolor.value) {
            case ("After School Special"):
                color = "ASS";
                break;
            case ("Morning Haze"):
                color = "MH";
                break;
            case ("Cozy Denim"):
                color = "CD";
                break;
            case ("Rainy Day"):
                color = "RD";
                break;
            default:
                color = "ASS"
        }

        switch (event.target.attributes.fill.value) {
            case ("Duck Down"):
                fill = "DD";
                break;
            case ("Hypoallergenic Poly-Blend"):
                fill = "HPB";
                break;
            case ("Memory Foam"):
                fill = "MF";
                break;
            default:
                fill = "DD"
        }

        const item = { 'quant': 1, 'type': product, 'color': color, 'fill': fill, "imgSrc": background, "imgSize": backgroundSize, "imgPosition": backgroundPosition, "cost": cost }

        if (JSON.parse(localStorage.getItem("cart")) === null) {
            // Push the item into onto the array 'list'
            list.push(item);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem("Cart", JSON.stringify(list));
            this.props.cartUpdate();
        } else {
            list = JSON.parse(localStorage.getItem("Cart"));
            // Push the new item into list
            list.push(item);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem("Cart", JSON.stringify(list));
            this.props.cartUpdate();
        }
    }

    // If there are items, Else no fave message
    faveItems = () => {
        if (this.state.cartQuant === 0) {
            return <Grid item container direction="column" justify="center" alignItems="center" id="emptyCart">
                <Box item="true" className="emptyCartText">No Favorites so far</Box>
                <Grid><Link to="/shop" className='cartButtonShop'>back to shop</Link></Grid>
            </Grid>
        } else {
            return (
                <Grid item container direction="row" spacing={2}>
                    {this.state.faved.map((item, index) => (
                        <Favecard
                            key={index.toString()}
                            location={index}
                            imgSrc={item.imgSrc}
                            imgSize={item.imgSize}
                            imgPosition={item.imgPosition}
                            product={item.type}
                            color={item.color}
                            fill={item.fill} 
                            removeItem={this.removeItem}
                            prodCost = {item.cost}
                            addFavesToCart = {this.addFaves2Cart}
                        />
                    ))}
                </Grid>
            )
        }
    }

    render = () => {
        return (
            <div>
                <h1 className='pageHeader'>your favorites</h1>
                <Box className="favesDiv" px={4} py={3}>
                        {this.faveItems()}
                </Box>
            </div>
        )
    }
}

export default Fave;