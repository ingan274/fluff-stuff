import React from "react";
import { Grid } from '@material-ui/core';
import "./style.css";

const SubNav = (props) => (
  <nav>
    <Grid container display="column" justify="center">
      <Grid item container display="row" justify="center">
        <div className="checkoutStatus" style={{ color: props.checkout1 }}>shipping</div>
        <div item="true" className="checkoutLine"></div>
        <div className="checkoutStatus" style={{ color: props.checkout2 }}>payment</div>
        <div item="true" className="checkoutLine"></div>
        <div className="checkoutStatus" style={{ color: props.checkout3 }}>confirmation</div>
      </Grid>
    </Grid>
  </nav>
)

export default SubNav;