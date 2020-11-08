import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import "./style.css"
import {
    Link,
} from "react-router-dom";

class BannerImg extends Component {

    render = () => {
        const style = {
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('${this.props.bannerSrc}')`,
            backgroundSize: `${this.props.bannerSize}`,
            backgroundPosition: `${this.props.bannerPosition}`

        };

        if (this.props.ctaButton === "true") {
            return (
                <Box mt={1}>
                    <Grid container direction="column" alignItems="center" className='photo' style={style}>

                        <Grid item className='phototext' id="homeBannerTxt">{this.props.bannerText}</Grid>
                        <Grid item ><Link to="/shop" className='homeButtonCTA'>lets get comfy</Link></Grid>
                    </Grid>
                </Box>

            )
        } else {
            return (
                <Box mt={1}>
                    <Grid container direction="column" justify="center" className='photo' style={style}>
                        <Grid item className='phototext'>{this.props.bannerText}</Grid>
                    </Grid >
                </Box>
            )
        }
    }
}

export default BannerImg;