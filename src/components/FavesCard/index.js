
import React, { Component } from "react";
import "./style.css";
import { Box } from '@material-ui/core';


class CartProd extends Component {

    render = () => {
        let img = {
            background: `url('${this.props.imgSrc}')`,
            backgroundSize: `${this.props.imgSize}`,
            backgroundPosition: `${this.props.imgPosition}`
        };

        return (
            <Box item='true' container='true' xs={3} className="faveProducts" directon="column" spacing={2} m={2} px={2} py={1} alignItems="center" justify="center">
                <Box item='true' m={1} className="productRemove" name={this.props.location} onClick={this.props.removeItem}>remove</Box>
                <Box item='true' className="faveImg" style={img} m={1}></Box>
                <Box item='true' m={2} className="productTitleFave">{this.props.product}</Box>
                <Box m={2} className="colorFillFave"><span className="colorFillLabel">Color:</span> {this.props.color}</Box>
                <Box m={2} className="colorFillFave"><span className="colorFillLabel">Fill:</span> {this.props.fill}</Box>
                <Box m={2} className="prodPriceFave">${this.props.prodCost}</Box>
                <Box className="addFavetoCart"
                    product={this.props.product}
                    pillowcolor={this.props.color}
                    fill={this.props.fill}
                    cost={this.props.prodCost}
                    background={this.props.imgSrc}
                    backgroundsize={this.props.imgSize}
                    backgroundposition={this.props.imgPosition}
                    onClick={this.props.addFavesToCart}>Add to Cart</Box>
            </Box>
        )
    }
}

export default CartProd;