import React from "react";
import { Box, Grid } from '@material-ui/core';
import {
    Link,
} from "react-router-dom";
import "./style.css";

const ProdTile = props => (
    <Box className='productArea' mb={1} mx={2} style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3)), url(${props.imgSrc})` }}>
        <Grid container className='productText'>
            <h1 className='prodName'>{props.product}</h1>
            <Grid container direction="row" justify="space-between" alignItems="center" className='costAdd row'>
                <Grid item xs={3} className='cost'>{props.price}</Grid>
                <Grid item xs={3}>
                    <Link className='addToCart' to='/cart'>Add to Cart</Link>
                </Grid>
            </Grid>
        </Grid>
    </Box>
)

export default ProdTile;