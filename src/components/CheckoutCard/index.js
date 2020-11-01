
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
            <Grid item container className="checkoutCart" directon="row" spacing={2}>
                {/* Image and product Name */}
                <Box item='true' xs={2}  className="checkoutImg" style={img} m={1}></Box>
                <Grid item container xs={5} spacing={1} direction="column">
                    <Box item='true' className="productCheckoutTitle">{this.props.product}</Box>
                    <Box item='true' mt={1} className="colorFillCart"><span className="colorFillLabel">Color:</span> {this.props.color}</Box>
                    <Box item='true' className="colorFillCart"><span className="colorFillLabel">Fill:</span> {this.props.fill}</Box>
                </Grid>
                <Grid item xs={3} container direction="column">
                    <Grid item >
                        <Box mt={1} className="checkoutProd">${this.props.prodCost}</Box>
                        <Box  className="checkoutProd">x {this.props.quant}</Box>
                    </Grid>
                    <Box item='true' mt={1} className="checkoutProdTotal">${this.props.prodTotal}</Box>
                </Grid>
            </Grid>
        )
    }
}

export default CartProd;