import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import {
    Link,
} from "react-router-dom";
import Photos from "../../components/Detail-imgs";
import Body from "../../components/Detail-body";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import SubNav from "../../components/SubNav";


class Detail extends Component {

    constructor(props) {
        super(props);
        const { handle } = this.props.match.params

        if (handle === "bed-pillow") {
            this.state = {
                product: 'bed pillow',
                price: '$32.99',
                description: 'Our decorative bed pillows add style and comfort affordably to your bedroom. Sustainably made, discover our unique and colorful selection of bed pillows to accent any bedroom space.',
                washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Machine dry',
                washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insertand cover in at a low temp.',
                reco: "Bed, Lumbar, Bench",
                size: "18' x 18'",

                imgSrc: '',
                imgSize: '',
                imgPosition: '',
                imgSrc1: '',
                imgSize1: '',
                imgPosition1: '',
                imgSrc2: '',
                imgSize2: '',
                imgPosition2: '',
                imgSrc3: '',
                imgSize3: '',
                imgPosition3: '',
                imgSrc4: '',
                imgSize4: '',
                imgPosition4: '',

                detail: false,
                care: false,
                ship: false,
            }
        } else if (handle === "couch-pillow") {
            this.state = {
                product: 'couch pillow',
                price: '$42.99',
                description: 'Couch pillow are a common decoration accessories in home life, but our couch pillows can be put in your arms to play a warm and protective role, but also bring a different style and fashion.',
                washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Hang to dry cover | Machine dry insert',
                washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert and cover in at a low temp. Hang dry the outside cover.',
                reco: "Lumbar, Sofa, Car, Patio",
                size: "25' x 25'",

                imgSrc: '../../assets/imgs/morning-haze/olena-sergienko-aKIxt1mGcRU-unsplash.jpg',
                imgSize: 'cover',
                imgPosition: 'bottom',
                imgSrc1: '../../assets/imgs/morning-haze/olena-sergienko-aKIxt1mGcRU-unsplash.jpg',
                imgSize1: 'cover',
                imgPosition1: 'bottom',
                imgSrc2: '../../assets/imgs/Denim/taylor-simpson-6JGJjb49PqA-unsplash.jpg',
                imgSize2: '230%',
                imgPosition2: '15% 70%',
                imgSrc3: '../../assets/imgs/school-special/sven-brandsma-GWFFvub7Y1U-unsplash.jpg',
                imgSize3: '150%',
                imgPosition3: 'center',
                imgSrc4: '../../assets/imgs/rainy-day/pesce-huang-L0_i0ClBM8E-unsplash.jpg',
                imgSize4: 'cover',
                imgPosition4: 'center',

                detail: false,
                care: false,
                ship: false,
            }
        } else if (handle === "round-pillow") {
            this.state = {
                product: 'round pillow',
                price: '$30.99',
                description: 'These stylish under-stuffed round pillows are the perfect accessory anywhere in the house. They will Bring the perfect finishing touch to any couch, chair or bed.',
                washShort: 'Hnad wash cover | Machine wash insert | Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing',
                washLong: 'Hand wash cover. Machine wash insert. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert in at a low temp. Hang dry the outside cover.',
                reco: "Bed, Sofa, Chair, Patio",
                size: "15' x 15'",

                imgSrc: '../../assets/',
                imgSize: '',
                imgPosition: '',
                imgSrc1: '../../assets/',
                imgSize1: '',
                imgPosition1: '',
                imgSrc2: '../../assets/',
                imgSize2: '',
                imgPosition2: '',
                imgSrc3: '../../assets/',
                imgSize3: '',
                imgPosition3: '',
                imgSrc4: '../../assets/',
                imgSize4: '',
                imgPosition4: '',

                detail: false,
                care: false,
                ship: false,
            }
        } else if (handle === "floor-pouf-pillow") {
            this.state = {
                product: 'floor pouf pillow',
                price: '$45.99',
                description: 'Our floor poufs are sturdy and ideal for distinguishing small spaces or adding an extra seat for guests without taking up too much floor space.',
                washShort: 'Hand wash only | Low temputure water (30°) | Do not bleach | Hang to dry',
                washLong: 'Hand wash only. Remove the cover from the insert. Wash both in cold tempurature water. Hang dry the outside cover.',
                reco: "Bed, Sofa, Car, Patio",
                size: "28' x 28'",

                imgSrc: '../../assets/',
                imgSize: '',
                imgPosition: '',
                imgSrc1: '../../assets/',
                imgSize1: '',
                imgPosition1: '',
                imgSrc2: '../../assets/',
                imgSize2: '',
                imgPosition2: '',
                imgSrc3: '../../assets/',
                imgSize3: '',
                imgPosition3: '',
                imgSrc4: '../../assets/',
                imgSize4: '',
                imgPosition4: '',

                detail: false,
                care: false,
                ship: false,
            }
        }
    };

    details = () => {
        if (this.state.detail) {
            console.log("detail is open")
        } else if (this.state.care) {
            console.log("care is open")
        } else if (this.state.ship) {
            console.log("ship is open")
        } else {
            return (
                <Grid container direction="column" className='details'>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" className={this.state.detailC}>
                        <Grid item xs={11} className="dropdownTitle detail" >Details</Grid>
                        <Grid item xs={1} className="sign">+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" className={this.state.careC}>
                        <Grid item xs={11} className="dropdownTitle">Care Instructions</Grid>
                        <Grid item xs={1} className="sign">+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" className={this.state.shipC}>
                        <Grid item xs={11} className="dropdownTitle">Shipping + Handling</Grid>
                        <Grid item xs={1} className="sign">+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                </Grid>
            )
        }

        console.log(this.state.care)
    };

    photoChange = (event) => {

    }


    render = () => (

        <Container>
            <Nav />
            <SubNav />
            <p className="pagePath"> <Link id="pathToAll" to='/shop'>All Products </Link>/ {this.state.product}</p>
            <Grid container direction="row" justify="space-around">
                <Grid item xs={5}>
                    <Photos
                        imgSrc={this.state.imgSrc}
                        imgSize={this.state.imgSize}
                        imgPosition={this.state.imgPosition}
                        imgSrc1={this.state.imgSrc1}
                        imgSize1={this.state.imgSize1}
                        imgPosition1={this.state.imgPosition1}
                        imgSrc2={this.state.imgSrc2}
                        imgSize2={this.state.imgSize2}
                        imgPosition2={this.state.imgPosition2}
                        imgSrc3={this.state.imgSrc3}
                        imgSize3={this.state.imgSize3}
                        imgPosition3={this.state.imgPosition3}
                        imgSrc4={this.state.imgSrc4}
                        imgSize4={this.state.imgSize4}
                        imgPosition4={this.state.imgPosition4}
                        handleClick={this.photoChange} />
                </Grid>
                <Grid item xs={6}>
                    <Body
                        product={this.state.product}
                        price={this.state.price}
                        description={this.state.description}

                        detailC={this.state.detailC}
                        detailO={this.state.detailO}

                        careC={this.state.detailC}
                        careO={this.state.detailO}

                        shipC={this.state.detailC}
                        shipO={this.state.detailO}
                    />
                    <Box mx={2}>
                        <Grid container direction="row" className="quantity">
                            <p className='upQuant quantarrow'> &#x2B06;</p>
                            <input className='quant' placeholder="1" />
                            <p className='downQuant quantarrow'>&#x2B07;</p>
                        </Grid>
                        <Box mb={1} mt={3} className='itemSelectTitle'>COLOR</Box>
                        <Grid container direction="row" alignItems="center" justify='space-around' className='coloroptions'>
                            <Grid item className='customColor'>
                                <Box py={1} mx={2} className='textOpt colorSelect' defaultValue="ASS"> AFTER SCHOOL <br />SPECIAL</Box>
                            </Grid>
                            <Grid item className='customColor'>
                                <Box py={2} mx={2} className='textOpt colorSelect' defaultValue="MH">MORNING HAZE</Box>
                            </Grid>
                            <Grid item className='customColor'>
                                <Box py={2} mx={2} className='textOpt colorSelect' defaultValue="CD">COZY DEMIN</Box>
                            </Grid>
                            <Grid item className='customColor'>
                                <Box py={2} mx={2} className='textOpt colorSelect' defaultValue="RD">RAINY DAY</Box>
                            </Grid>
                        </Grid>
                        <Box mb={1} mt={3} className='itemSelectTitle'>PILLOW FILL</Box>
                        <Grid container direction="row" alignItems="center" justify='space-around' className='filloptions'>
                            <Grid item className='customFill'>
                                <Box py={2} px={1} mx={1} className='textOpt fillSelect' defaultValue="RD">DUCK DOWN</Box>
                            </Grid>
                            <Grid item className='customFill'>
                                <Box py={2} px={1} mx={1} className='textOpt fillSelect' defaultValue="HPB">HYPOALLERGENIC POLY-BLEND</Box>
                            </Grid>
                            <Grid item className='customFill'>
                                <Box py={2} px={1} mx={1} className='textOpt fillSelect' defaultValue="MF">MEMORY FOAM</Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {this.details()}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Detail;