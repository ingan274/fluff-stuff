import React from "react";
import { Grid } from '@material-ui/core';
import {
  NavLink
} from "react-router-dom";
import "./style.css";

const SubNav = (props) => (
    <nav>
      <Grid container display="row" spacing={3} justify="center">
        <Grid item >
          <NavLink to="/shop/bed-pillow" activeClassName='selectedProd' className='productNav' product="bed-pillow">BED PILLOW</NavLink>
        </Grid>
        <Grid item >
          <NavLink to="/shop/couch-pillow" activeClassName='selectedProd' className='productNav'  product="couch-pillow">COUCH PILLOW</NavLink>
        </Grid>
        <Grid item >
          <NavLink to="/shop/round-pillow" activeClassName='selectedProd' className='productNav'  product="round-pillow">ROUND PILLOW</NavLink>
        </Grid>
        <Grid item >
          <NavLink to="/shop/floor-pouf-pillow" activeClassName='selectedProd' className='productNav'  product="floor-pouf-pillow">FLOOR POUF PILLOW</NavLink>
        </Grid>
      </Grid>
    </nav>
  )

export default SubNav;