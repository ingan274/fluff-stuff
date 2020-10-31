
import React, { Component } from "react";
import "./style.css";
import { Grid, Box } from '@material-ui/core';


class CartProd extends Component {

    render = () => {
        let img = {
            background: `url('${this.props.imgSrc}')`,
            backgroundSize: `${this.props.imgSize}`,
            backgroundPosition: `${this.props.imgPosition}`
        };

        return (
            <Grid item container className="cartProducts" directon="row" spacing={2}>
                {/* Image and product Name */}
                <Box xs={3} item='true' className="prodImg" style={img} m={1}></Box>
                <Grid item xs={4} spacing={1} direction="column">
                    <Box item='true' m={2} className="productTitle">{this.props.product}</Box>
                    <Box m={1} className="colorFillCart"><span className="colorFillLabel">Color:</span> {this.props.color}</Box>
                    <Box m={1} className="colorFillCart"><span className="colorFillLabel">Fill:</span> {this.props.fill}</Box>
                </Grid>
                <Grid item xs={2} container direction="column">
                    <Grid item xs={2} >
                        <Box m={1} className="prodPrice">${this.props.prodCost}</Box>
                        <Box m={1} className="prodquant">Quantity: {this.props.quant}</Box>
                    </Grid>
                    <Box item='true' m={1} className="prodTotal">${this.props.prodTotal}</Box>
                </Grid>
            </Grid>
        )
    }
}

export default CartProd;