import React from "react";
import { Grid } from '@material-ui/core';
import {
  NavLink
} from "react-router-dom";
import "./style.css";

const SubNav = () => (
    <nav>
      <Grid container display="row" spacing={3} justify="center">
        <Grid item >
          <NavLink to="/shop/bed-pillow" activeClassName='selectedProd' className='productNav '>BED PILLOW</NavLink>
        </Grid>
        <Grid item >
          <NavLink to="/shop/couch-pillow" activeClassName='selectedProd' className='productNav '>COUCH PILLOW</NavLink>
        </Grid>
        <Grid item >
          <NavLink to="/shop/round-pillow" activeClassName='selectedProd' className='productNav '>ROUND PILLOW</NavLink>
        </Grid>
        <Grid item >
          <NavLink to="/shop/floor-pouf-pillow" activeClassName='selectedProd' className='productNav '>FLOOR POUF PILLOW</NavLink>
        </Grid>
      </Grid>
    </nav>
  )

export default SubNav;