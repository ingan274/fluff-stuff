import React from "react";
import "./style.css";
import { Grid } from '@material-ui/core';
import Product from "../../components/AllProd-tile";
import BedImg from "../../assets/imgs/morning-haze/annie-spratt-V-6bv_-LzOo-unsplash.jpg";
import CouchImg from "../../assets/imgs/rainy-day/pesce-huang-OTR3YJiigkw-unsplash.jpg";
import RoundImg from "../../assets/imgs/Denim/krisztina-papp-SR5Kdmk5W0o-unsplash.jpg";
import PoufImg from "../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg";
import Container from "../../components/Container";
import Nav from "../../components/Nav";

const AllProd = props => (
    <Container>
        <Nav />
        <Grid containter="true">
            <Grid item container className="prodLine" direction="row" justify="space-evenly">
                <Grid item xs={6}><Product
                    title='bed'
                    extraclass='bed'
                    description='Our decorative bed pillows add style and comfort affordably to your bedroom. Sustainably
                made, discover our unique and colorful selection of bed pillows to accent any bedroom space.'
                    imgSrc={BedImg}
                    link="/shop/bed-pillow"
                /></Grid>

                <Grid item xs={6}><Product
                    title="couch"
                    extraclass="couch"
                    description="Couch pillows are a common decoration accessories in home life, but our couch pillows can
                be put in your arms to play a warm and protective role, but also bring a different style and
                fashion."
                    imgSrc={CouchImg}
                    link="/shop/couch-pillow"
                /></Grid>
            </Grid>
            <Grid item container className="prodLine" direction="row" justify="space-evenly">
                <Grid item xs={6}><Product
                    title="round"
                    extraclass="round"
                    description="These stylish under-stuffed round pillows are the perfect accessory anywhere in the
                house. They will Bring the perfect finishing touch to any couch, chair or bed."
                    imgSrc={RoundImg}
                    link="/shop/round-pillow"
                /></Grid>
                <Grid item xs={6}><Product
                    title="flour pouf"
                    extraclass="pouf"
                    description="Our floor poufs are sturdy and ideal for distinguishing small spaces or adding an extra
                seat for guests without taking up too much floor space."
                    imgSrc={PoufImg}
                    link="/shop/flour-pouf-pillow"
                /></Grid>
            </Grid>
        </Grid>
    </Container>
)


export default AllProd;