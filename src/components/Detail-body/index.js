import React, { Component } from "react";
import { Box, Grid } from '@material-ui/core';
import "./style.css";

class ProdInfo extends Component {
    render = () => {
        let faveButton;
        if (this.props.favoritedText) {
            faveButton = <Box className='favorite'>Favorited</Box>;
        } else {
            faveButton = <Box className='addToFavorites' location='Favorite' onClick={this.props.addtoFavorites} >Add to Favorites</Box>;
        }

        return (
            <Box className='productArea' mb={1} mx={2}>
                <Grid container className='productText'>
                    <h1 className='prodName'>{this.props.product}</h1>
                    <Grid container direction="row" justify="space-between" alignItems="center" className='costAdd row'>
                        <Box item="true" ml={2}>
                            <Grid item container xs={10} direction='column' alignItems='flex-start'>
                                <Grid item className='cost'>${this.props.price}</Grid>
                                <Grid container direction="row" alignItems="center" className="quantity">
                                    <Box item="true" className="quantLabel">QUANTITY:</Box>
                                    <Box item="true" className=' quantarrow' name="down" onClick={this.props.changeQuant}>-</Box>
                                    <input item="true" type="number" className='quant' name="quant" placeholder="1" value={this.props.prodNum} disabled />
                                    <Box item="true" className=' quantarrow' name="up" onClick={this.props.changeQuant}>+</Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Grid item container direction="column" justify="center" xs={3}>
                            <Box className='addToCart' location='Cart' onClick={this.props.addtoCart}>Add to Cart</Box>
                            {faveButton}
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        )
    }
}

export default ProdInfo;