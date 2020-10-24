
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
                <Grid item xs={4}>
                    <Grid container direction="row" alignItems="flex-start" justify="flex-start" spacing={2}>
                        <Box item='true' className="prodImg" style={img} m={1}></Box>
                        <Box item='true' m={2} className="productTitle">{this.props.product}</Box>
                    </Grid>
                </Grid>

                {/* Color and Fill */}
                <Grid item xs={3} >
                    <Box m={1} className="colorFillCart"><span className="colorFillLabel">Color:</span> {this.props.color}</Box>
                    <Box m={1} className="colorFillCart"><span className="colorFillLabel">Fill:</span> {this.props.fill}</Box>
                </Grid>
                {/* Prod Cost */}
                <Grid item xs={2} >
                    <Box m={1} className="prodPrice">${this.props.prodCost}</Box>
                </Grid>
                {/* Quant */}
                <Grid item xs={1} >
                    <Box m={1} >{this.props.quant}</Box>
                </Grid>
                {/* Total Prod Cost */}
                <Grid item xs={2} container direction="column">
                    <Box item='true'  m={1} className="prodTotal">${this.props.prodTotal}</Box>
                    <Box item='true' m={1} className="productRemove" name={this.props.location} onClick={this.props.removeItem}>remove</Box>
                </Grid>
            </Grid>
        )
    }
}

export default CartProd;