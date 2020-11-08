import React, { Component } from "react";
import { Box, Grid } from '@material-ui/core';
import "./style.css";


class ProdImgs extends Component {

    render = () => {
        let main = {
            background: `url('${this.props.imgSrc}')`,
            backgroundSize: `${this.props.imgSize}`,
            backgroundPosition: `${this.props.imgPosition}`
        };

        const photo1 = {
            background: `url('${this.props.imgSrc1}')`,
            backgroundSize: `${this.props.imgSize1}`,
            backgroundPosition: `${this.props.imgPosition1}`
        };

        const photo2 = {
            background: `url('${this.props.imgSrc2}')`,
            backgroundSize: `${this.props.imgSize2}`,
            backgroundPosition: `${this.props.imgPosition2}`
        };

        const photo3 = {
            background: `url('${this.props.imgSrc3}')`,
            backgroundSize: `${this.props.imgSize3}`,
            backgroundPosition: `${this.props.imgPosition3}`
        };

        const photo4 = {
            background: `url('${this.props.imgSrc4}')`,
            backgroundSize: `${this.props.imgSize4}`,
            backgroundPosition: `${this.props.imgPosition4}`
        };

        return (
            <Box className='allProdImages' mb={3}>
                <Grid container justify="center">
                    <Box  item="true" mx={1} className='currentImg' style={main}></Box>
                    <Grid item container display="row" className='otherImgs'>
                        <Grid item xs={3}><Box item="true" my={2} mx={1} className='otherimg img1' id="1" style={photo1} onClick={this.props.handleClick}></Box></Grid>
                        <Grid item xs={3} ><Box item="true" my={2} mx={1} className='otherimg img2' id="2" style={photo2} onClick={this.props.handleClick}></Box></Grid>
                        <Grid item xs={3} ><Box item="true" my={2} mx={1} className='otherimg img3' id="3" style={photo3} onClick={this.props.handleClick}></Box></Grid>
                        <Grid item xs={3}><Box item="true" my={2} mx={1} className='otherimg img4' id="4" style={photo4} onClick={this.props.handleClick}></Box></Grid>
                    </Grid>
                </Grid>
            </Box>
        )

    }
}



export default ProdImgs;