import React from "react";
import { Box } from '@material-ui/core';
import {
    Link,
} from "react-router-dom";
import "./style.css";

const ProdTile = props => (
    <Box className={`productArea ${props.extraclass}`} mb={3} mx={2} px={5} py={4} style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3)), url(${props.imgSrc})` }}>
        <p className='desc'>{props.description}</p>
        <p className='prodTitle'>{props.title}</p>
        <Link className='shopBtn' to={props.link}>shop</Link>
    </Box>
)

export default ProdTile;