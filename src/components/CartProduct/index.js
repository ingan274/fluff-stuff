
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
            <Grid item container className="cartProduct" directon="row">
                {/* Image and product Name */}
                <Grid item xs={3}>
                    <Grid container direction="row" alignItems="flex-start" spacing={2}>
                        <Box style={img}></Box>
                        <Box className="productText">{this.props.product}</Box>
                    </Grid>
                </Grid>

                {/* Color and Fill */}
                <Grid item xs={3} >
                    <Box className="productText">{this.props.color}</Box>
                    <Box className="productText">{this.props.fill}</Box>
                </Grid>
                {/* Prod Cost */}
                <Grid item xs={2} >
                    <Box className="productText">{this.props.prodCost}</Box>
                </Grid>
                {/* Quant */}
                <Grid item xs={2} >
                    <Box className="productText">{this.props.quant}</Box>
                </Grid>
                {/* Total Prod Cost */}
                <Grid item xs={2} container directon="column" justify='center'>
                    <Box className="productText">{this.props.prodTotal}</Box>
                    <Box className="productRemove" onClick={this.props.delete}>remove</Box>
                </Grid>
            </Grid>
        )
    }
}

export default CartProd;