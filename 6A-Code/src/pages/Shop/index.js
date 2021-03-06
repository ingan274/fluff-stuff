import React from "react";
import { Grid, Box } from '@material-ui/core';
import Product from "../../components/AllProd-tile";
import BedImg from "../../assets/imgs/morning-haze/annie-spratt-V-6bv_-LzOo-unsplash.jpg";
import CouchImg from "../../assets/imgs/rainy-day/pesce-huang-OTR3YJiigkw-unsplash.jpg";
import RoundImg from "../../assets/imgs/Denim/krisztina-papp-SR5Kdmk5W0o-unsplash.jpg";
import PoufImg from "../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg";

const AllProd = props => (
    <Box>
        {/* Product Page => using a grid to set up each row and Product component sets up the product tile */}
        <Grid containter="true">
            <Grid item container className="prodLine" direction="row" justify="space-evenly">
                <Grid item xs={6}>
                    <Product
                        title='bed'
                        extraclass='bed'
                        description='Our decorative bed pillows add style and comfort affordably to your bedroom. Sustainably
                made, discover our unique and colorful selection of bed pillows to accent any bedroom space.'
                        imgSrc={BedImg}
                        link="/shop/bed-pillow"
                    />
                </Grid>

                <Grid item xs={6}>
                    <Product
                        title="couch"
                        extraclass="couch"
                        description="Couch pillows are a common decoration accessories in home life, but our couch pillows can
                be put in your arms to play a warm and protective role, but also bring a different style and
                fashion."
                        imgSrc={CouchImg}
                        link="/shop/couch-pillow"
                    />
                </Grid>
            </Grid>
            <Grid item container className="prodLine" direction="row" justify="space-evenly">
                <Grid item xs={6}>
                    <Product
                        title="round"
                        extraclass="round"
                        description="These stylish under-stuffed round pillows are the perfect accessory anywhere in the
                house. They will Bring the perfect finishing touch to any couch, chair or bed."
                        imgSrc={RoundImg}
                        link="/shop/round-pillow"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Product
                        title="flo0r pouf"
                        extraclass="pouf"
                        description="Our floor poufs are sturdy and ideal for distinguishing small spaces or adding an extra
                seat for guests without taking up too much floor space."
                        imgSrc={PoufImg}
                        link="/shop/floor-pouf-pillow"
                    />
                </Grid>
            </Grid>
        </Grid>
    </Box>
)


export default AllProd;