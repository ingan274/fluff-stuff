import React, { Component } from "react";
import { Box, Grid } from '@material-ui/core';
import "./style.css";

class ProdTile extends Component {

    // componentDidUpdate = () => {
    //     window.location.reload()
    // }

    render = () => {
        const isfavorited = this.props.favoritedText;
        let faveText;
        if (isfavorited) {
            faveText = <Box className='favorite' onClick={this.props.favorited} >Favorited</Box>;
        } else {
            faveText = <Box className='favorite' onClick={this.props.favorited} >Add to Favorites</Box>;
        }
        return (
            <Box className='productArea' mb={1} mx={2} style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3)), url(${this.props.imgSrc})`
            }}>
                <Grid container className='productText'>
                    <h1 className='prodName'>{this.props.product}</h1>
                    <Grid container direction="row" justify="space-between" alignItems="center" className='costAdd row'>
                        <Grid item xs={3} className='cost'>{this.props.price}</Grid>
                        <Grid item container direction="column" justify="center" xs={3}>
                            <Box className='addToCart' onClick={this.props.saveItem}>Add to Cart</Box>
                            {faveText}

                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        )
    }
}

export default ProdTile;