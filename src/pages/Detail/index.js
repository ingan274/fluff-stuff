import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import {
    Link,
} from "react-router-dom";
import Photos from "../../components/Detail-imgs";
import Body from "../../components/Detail-body";
import SubNav from "../../components/SubNav";
import Tips from "../../components/Detail-tips";


class Detail extends Component {
    // Sets states depending on the product path it lands on
    constructor(props) {
        super(props);
        const { product } = this.props.match.params;
        switch (product) {
            case ("bed-pillow"):
                this.state = {
                    page: 'bed-pillow',
                    product: 'bed pillow',
                    price: '$32.99',
                    description: 'Our decorative bed pillows add style and comfort affordably to your bedroom. Sustainably made, discover our unique and colorful selection of bed pillows to accent any bedroom space.',
                    washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Machine dry',
                    washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insertand cover in at a low temp.',
                    reco: "Bed, Lumbar, Bench",
                    size: "18' x 18'",
                    shipping: "To return your product, email info@fluffstuff.com. Include order number as well as reason for return. A member of our customer service team will provide you return instructions within 1-2 business days of your request. Please note that you are responsible for shipping costs and the safe return of merchandise. Returns of product boxes without product inside will not be accepted.",

                    mainImage: '1',
                    imgSrc: '../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg',
                    imgSize: '230%',
                    imgPosition: '90% 50%',
                    imgSrc1: '../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg',
                    imgSize1: '230%',
                    imgPosition1: '90% 50%',
                    imgSrc2: '../../assets/imgs/Denim/christopher-jolly-IZkuoaXqTS8-unsplash.jpg',
                    imgSize2: '160%',
                    imgPosition2: '100% 50%',
                    imgSrc3: '../../assets/imgs/school-special/sincerely-media-Go7ZuBc1LIk-unsplash.jpg',
                    imgSize3: '110%',
                    imgPosition3: '100% 100%',
                    imgSrc4: '../../assets/imgs/morning-haze/graes-magazine-zDHUYnBdesI-unsplash.jpg',
                    imgSize4: '120%',
                    imgPosition4: '50% 80%',
                    tipsImg: "../../assets/imgs/home/julia-peretiatko-rlX-SEqCZ6s-unsplash.jpg",
                    tipsImgSize: "102%",

                    detail: false,
                    care: false,
                    ship: false,

                    cartReady: false,
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,
                    favorited: false,
                }
                break;

            case ('couch-pillow'):
                this.state = {
                    page: 'couch-pillow',
                    product: 'couch pillow',
                    price: '$42.99',
                    description: 'Couch pillow are a common decoration accessories in home life, but our couch pillows can be put in your arms to play a warm and protective role, but also bring a different style and fashion.',
                    washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Hang to dry cover | Machine dry insert',
                    washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert and cover in at a low temp. Hang dry the outside cover.',
                    reco: "Lumbar, Sofa, Car, Patio",
                    size: "25' x 25'",
                    shipping: "To return your product, email info@fluffstuff.com. Include order number as well as reason for return. A member of our customer service team will provide you return instructions within 1-2 business days of your request. Please note that you are responsible for shipping costs and the safe return of merchandise. Returns of product boxes without product inside will not be accepted.",

                    mainImage: '1',
                    imgSrc: '../../assets/imgs/morning-haze/olena-sergienko-aKIxt1mGcRU-unsplash.jpg',
                    imgSize: '111%',
                    imgPosition: 'bottom',
                    imgSrc1: '../../assets/imgs/morning-haze/olena-sergienko-aKIxt1mGcRU-unsplash.jpg',
                    imgSize1: '111%',
                    imgPosition1: 'bottom',
                    imgSrc2: '../../assets/imgs/Denim/taylor-simpson-6JGJjb49PqA-unsplash.jpg',
                    imgSize2: '229%',
                    imgPosition2: '15% 70%',
                    imgSrc3: '../../assets/imgs/school-special/sven-brandsma-GWFFvub7Y1U-unsplash.jpg',
                    imgSize3: '151%',
                    imgPosition3: 'center',
                    imgSrc4: '../../assets/imgs/rainy-day/pesce-huang-L0_i0ClBM8E-unsplash.jpg',
                    imgSize4: '141%',
                    imgPosition4: '80% 40%',
                    tipsImg: "../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg",
                    tipsImgSize: "101%",

                    detail: false,
                    care: false,
                    ship: false,

                    cartReady: false,
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,
                    favorited: false,
                }
                break;


            case ('round-pillow'):
                this.state = {
                    page: 'round-pillow',
                    product: 'round pillow',
                    price: '$30.99',
                    description: 'These stylish under-stuffed round pillows are the perfect accessory anywhere in the house. They will Bring the perfect finishing touch to any couch, chair or bed.',
                    washShort: 'Hnad wash cover | Machine wash insert | Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing',
                    washLong: 'Hand wash cover. Machine wash insert. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert in at a low temp. Hang dry the outside cover.',
                    reco: "Bed, Sofa, Chair, Patio",
                    size: "15' x 15'",
                    shipping: "To return your product, email info@fluffstuff.com. Include order number as well as reason for return. A member of our customer service team will provide you return instructions within 1-2 business days of your request. Please note that you are responsible for shipping costs and the safe return of merchandise. Returns of product boxes without product inside will not be accepted.",

                    mainImage: '1',
                    imgSrc: '../../assets/imgs/Denim/krisztina-papp-5mmbQLtNYHY-unsplash.jpg',
                    imgSize: '100%',
                    imgPosition: '50% 100%',
                    imgSrc1: '../../assets/imgs/Denim/krisztina-papp-5mmbQLtNYHY-unsplash.jpg',
                    imgSize1: '100%',
                    imgPosition1: '50% 100%',
                    imgSrc2: '../../assets/imgs/rainy-day/julien-lanoy-jV5Jqlgp4h0-unsplash.jpg',
                    imgSize2: '130%',
                    imgPosition2: '70% 100%',
                    imgSrc3: '../../assets/imgs/school-special/susanna-marsiglia-9bPXsEgrdcg-unsplash.jpg',
                    imgSize3: '201%',
                    imgPosition3: '50% 30%',
                    imgSrc4: '../../assets/imgs/school-special/susanna-marsiglia-9bPXsEdegyt-unsplash.jpg',
                    imgSize4: '250%',
                    imgPosition4: '0% 30%',
                    tipsImg: "../../assets/imgs/school-special/susanna-marsiglia-9bPXsEdegyt-unsplash.jpg",
                    tipsImgSize: "cover",

                    detail: false,
                    care: false,
                    ship: false,

                    cartReady: false,
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,
                    favorited: false,
                }
                break;


            case ('floor-pouf-pillow'):
                this.state = {
                    page: 'floor-pouf-pillow',
                    product: 'floor pouf pillow',
                    price: '$45.99',
                    description: 'Our floor poufs are sturdy and ideal for distinguishing small spaces or adding an extra seat for guests without taking up too much floor space.',
                    washShort: 'Hand wash only | Low temputure water (30°) | Do not bleach | Hang to dry',
                    washLong: 'Hand wash only. Remove the cover from the insert. Wash both in cold tempurature water. Hang dry the outside cover.',
                    reco: "Bed, Sofa, Car, Patio",
                    size: "28' x 28'",
                    shipping: "To return your product, email info@fluffstuff.com. Include order number as well as reason for return. A member of our customer service team will provide you return instructions within 1-2 business days of your request. Please note that you are responsible for shipping costs and the safe return of merchandise. Returns of product boxes without product inside will not be accepted.",
                    mainImage: '1',
                    imgSrc: '../../assets/imgs/morning-haze/agata-create-fQ2XuWjSzfE-unsplash.jpg',
                    imgSize: '132%',
                    imgPosition: '70% 40%',
                    imgSrc1: '../../assets/imgs/morning-haze/agata-create-fQ2XuWjSzfE-unsplash.jpg',
                    imgSize1: '132%',
                    imgPosition1: '70% 40%',
                    imgSrc2: '../../assets/imgs/Denim/julien-lanoy-rSGdLWXpKzk-unsplash.jpg',
                    imgSize2: '390%',
                    imgPosition2: '50% 15%',
                    imgSrc3: '../../assets/imgs/school-special/alana-mediavilla--vq6y8--P28-unsplash.jpg',
                    imgSize3: '400%',
                    imgPosition3: '80% 100%',
                    imgSrc4: '../../assets/imgs/school-special/sincerely-media-oCmfZpzj7HU-unsplash.jpg',
                    imgSize4: '120%',
                    imgPosition4: '100% 93%',
                    tipsImg: "../../assets/imgs/rainy-day/julien-lanoy-jV5Jqlgp4h0-unsplash.jpg",
                    tipsImgSize: "100%",

                    detail: false,
                    care: false,
                    ship: false,

                    cartReady: false,
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,
                    favorited: false,
                }
                break;
            default:
                window.location.refresh()
        }
    };

    // Update when -> user switches to another product
    componentDidUpdate = () => {

        const { product } = this.props.match.params;

        if (product !== this.state.page) {
            if (product === "bed-pillow") {
                this.setState({
                    page: 'bed-pillow',
                    product: 'bed pillow',
                    price: '$32.99',
                    description: 'Our decorative bed pillows add style and comfort affordably to your bedroom. Sustainably made, discover our unique and colorful selection of bed pillows to accent any bedroom space.',
                    washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Machine dry',
                    washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insertand cover in at a low temp.',
                    reco: "Bed, Lumbar, Bench",
                    size: "18' x 18'",

                    imgSrc: '../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg',
                    imgSize: '230%',
                    imgPosition: '90% 50%',
                    imgSrc1: '../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg',
                    imgSize1: '230%',
                    imgPosition1: '90% 50%',
                    imgSrc2: '../../assets/imgs/Denim/christopher-jolly-IZkuoaXqTS8-unsplash.jpg',
                    imgSize2: '160%',
                    imgPosition2: '100% 50%',
                    imgSrc3: '../../assets/imgs/school-special/sincerely-media-Go7ZuBc1LIk-unsplash.jpg',
                    imgSize3: '110%',
                    imgPosition3: '100% 100%',
                    imgSrc4: '../../assets/imgs/morning-haze/graes-magazine-zDHUYnBdesI-unsplash.jpg',
                    imgSize4: '120%',
                    imgPosition4: '50% 80%',
                    tipsImg: "../../assets/imgs/home/julia-peretiatko-rlX-SEqCZ6s-unsplash.jpg",
                    tipsImgSize: "102%",

                    detail: false,
                    care: false,
                    ship: false,

                    mainImage: '1',
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,

                })
            } else if (product === "couch-pillow") {
                this.setState({
                    page: 'couch-pillow',
                    product: 'couch pillow',
                    price: '$42.99',
                    description: 'Couch pillow are a common decoration accessories in home life, but our couch pillows can be put in your arms to play a warm and protective role, but also bring a different style and fashion.',
                    washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Hang to dry cover | Machine dry insert',
                    washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert and cover in at a low temp. Hang dry the outside cover.',
                    reco: "Lumbar, Sofa, Car, Patio",
                    size: "25' x 25'",

                    imgSrc: '../../assets/imgs/morning-haze/olena-sergienko-aKIxt1mGcRU-unsplash.jpg',
                    imgSize: '111%',
                    imgPosition: 'bottom',
                    imgSrc1: '../../assets/imgs/morning-haze/olena-sergienko-aKIxt1mGcRU-unsplash.jpg',
                    imgSize1: '111%',
                    imgPosition1: 'bottom',
                    imgSrc2: '../../assets/imgs/Denim/taylor-simpson-6JGJjb49PqA-unsplash.jpg',
                    imgSize2: '229%',
                    imgPosition2: '15% 70%',
                    imgSrc3: '../../assets/imgs/school-special/sven-brandsma-GWFFvub7Y1U-unsplash.jpg',
                    imgSize3: '151%',
                    imgPosition3: 'center',
                    imgSrc4: '../../assets/imgs/rainy-day/pesce-huang-L0_i0ClBM8E-unsplash.jpg',
                    imgSize4: '141%',
                    imgPosition4: '80% 40%',
                    tipsImg: "../../assets/imgs/school-special/minh-pham-OtXADkUh3-I-unsplash.jpg",
                    tipsImgSize: "101%",

                    detail: false,
                    care: false,
                    ship: false,

                    mainImage: '1',
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,
                })
            } else if (product === "round-pillow") {
                this.setState({
                    page: 'round-pillow',
                    product: 'round pillow',
                    price: '$30.99',
                    description: 'These stylish under-stuffed round pillows are the perfect accessory anywhere in the house. They will Bring the perfect finishing touch to any couch, chair or bed.',
                    washShort: 'Hnad wash cover | Machine wash insert | Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing',
                    washLong: 'Hand wash cover. Machine wash insert. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert in at a low temp. Hang dry the outside cover.',
                    reco: "Bed, Sofa, Chair, Patio",
                    size: "15' x 15'",

                    imgSrc: '../../assets/imgs/Denim/krisztina-papp-5mmbQLtNYHY-unsplash.jpg',
                    imgSize: '100%',
                    imgPosition: '50% 100%',
                    imgSrc1: '../../assets/imgs/Denim/krisztina-papp-5mmbQLtNYHY-unsplash.jpg',
                    imgSize1: '100%',
                    imgPosition1: '50% 100%',
                    imgSrc2: '../../assets/imgs/rainy-day/julien-lanoy-jV5Jqlgp4h0-unsplash.jpg',
                    imgSize2: '130%',
                    imgPosition2: '70% 100%',
                    imgSrc3: '../../assets/imgs/school-special/susanna-marsiglia-9bPXsEgrdcg-unsplash.jpg',
                    imgSize3: '200%',
                    imgPosition3: '50% 30%',
                    imgSrc4: '../../assets/imgs/school-special/susanna-marsiglia-9bPXsEdegyt-unsplash.jpg',
                    imgSize4: '250%',
                    imgPosition4: '0% 30%',
                    tipsImg: "../../assets/imgs/school-special/susanna-marsiglia-9bPXsEdegyt-unsplash.jpg",
                    tipsImgSize: "cover",

                    detail: false,
                    care: false,
                    ship: false,

                    mainImage: '1',
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,
                })
            } else if (product === "floor-pouf-pillow") {
                this.setState({
                    page: 'floor-pouf-pillow',
                    product: 'floor pouf pillow',
                    price: '$45.99',
                    description: 'Our floor poufs are sturdy and ideal for distinguishing small spaces or adding an extra seat for guests without taking up too much floor space.',
                    washShort: 'Hand wash only | Low temputure water (30°) | Do not bleach | Hang to dry',
                    washLong: 'Hand wash only. Remove the cover from the insert. Wash both in cold tempurature water. Hang dry the outside cover.',
                    reco: "Bed, Sofa, Car, Patio",
                    size: "28' x 28'",

                    imgSrc: '../../assets/imgs/morning-haze/agata-create-fQ2XuWjSzfE-unsplash.jpg',
                    imgSize: '132%',
                    imgPosition: '70% 40%',
                    imgSrc1: '../../assets/imgs/morning-haze/agata-create-fQ2XuWjSzfE-unsplash.jpg',
                    imgSize1: '132%',
                    imgPosition1: '70% 40%',
                    imgSrc2: '../../assets/imgs/Denim/julien-lanoy-rSGdLWXpKzk-unsplash.jpg',
                    imgSize2: '390%',
                    imgPosition2: '50% 15%',
                    imgSrc3: '../../assets/imgs/school-special/alana-mediavilla--vq6y8--P28-unsplash.jpg',
                    imgSize3: '400%',
                    imgPosition3: '80% 100%',
                    imgSrc4: '../../assets/imgs/school-special/sincerely-media-oCmfZpzj7HU-unsplash.jpg',
                    imgSize4: '120%',
                    imgPosition4: '100% 93%',
                    tipsImg: "../../assets/imgs/rainy-day/julien-lanoy-jV5Jqlgp4h0-unsplash.jpg",
                    tipsImgSize: "100%",

                    detail: false,
                    care: false,
                    ship: false,

                    mainImage: '1',
                    quant: 1,
                    color: "ASS",
                    ASS: true,
                    MH: false,
                    CD: false,
                    RD: false,
                    fill: "DD",
                    DD: true,
                    HPB: false,
                    MF: false,
                })
            }
        }
    }

    // Checks to see the state of the Dropdowns (see if its open or closed)
    details = () => {
        if (this.state.detail) {
            return (
                <Grid container direction="column" className='details'>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={11} className="dropdownTitle detail" onClick={() => this.openMoreInformation('detail')}>Details</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('detail')} >-</Grid>
                        <Grid item xs={12} className="openInfo" onClick={() => this.openMoreInformation('detail')}>{this.state.description}</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('care)')}>Care Instructions</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('care)')}>+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('ship')}>Shipping + Handling</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('ship')}>+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                </Grid>
            )
        } else if (this.state.care) {
            return (
                <Grid container direction="column" className='details'>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle detail" onClick={() => this.openMoreInformation('detail')}>Details</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('detail')}>+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('care)')} >Care Instructions</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('care)')}>-</Grid>
                        <Grid item xs={12} className="openInfo" onClick={() => this.openMoreInformation('care)')}>{this.state.washLong}</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('ship')}>Shipping + Handling</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('ship')} >+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                </Grid>
            )
        } else if (this.state.ship) {
            return (
                <Grid container direction="column" className='details'>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle detail" onClick={() => this.openMoreInformation('detail')}>Details</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('detail')}>+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('care)')}>Care Instructions</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('care)')}>+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('ship')}>Shipping + Handling</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('ship')}>-</Grid>
                        <Grid item xs={12} className="openInfo" onClick={() => this.openMoreInformation('ship')}>{this.state.shipping}</Grid>
                    </Grid>
                    <hr className='detailLine' />
                </Grid>
            )
        } else {
            return (
                <Grid container direction="column" className='details'>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={11} className="dropdownTitle detail" onClick={() => this.openMoreInformation('detail')} >Details</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('detail')} >+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('care')}>Care Instructions</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('care')}>+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                    <Grid container item direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} className="dropdownTitle" onClick={() => this.openMoreInformation('ship')} >Shipping + Handling</Grid>
                        <Grid item xs={1} className="sign" onClick={() => this.openMoreInformation('ship')} >+</Grid>
                    </Grid>
                    <hr className='detailLine' />
                </Grid>
            )
        }
    };


    // Click interaction to change state of what is open and closed
    openMoreInformation = (item) => {
        if (item === "detail") {
            this.setState({
                detail: true,
                care: false,
                ship: false,
            })
        } else if (item === "care") {
            this.setState({
                detail: false,
                care: true,
                ship: false,
            })
        } else if (item === "ship") {
            this.setState({
                detail: false,
                care: false,
                ship: true,
            })
        } else {
            this.setState({
                detail: false,
                care: false,
                ship: false,
            })
        }

    }

    // changes the sources of the main image when other images are selected 
    // Also tracks which image it is on
    photoChange = (event) => {
        const { id } = event.target;

        if (id !== this.state.mainImage) {

            if (id === '1') {
                this.setState({
                    imgSrc: this.state.imgSrc1,
                    imgSize: this.state.imgSize1,
                    imgPosition: this.state.imgPosition1,

                    mainImage: "1"
                })
            } else if (id === '2') {
                this.setState({
                    imgSrc: this.state.imgSrc2,
                    imgSize: this.state.imgSize2,
                    imgPosition: this.state.imgPosition2,

                    mainImage: "2"
                })
            } else if (id === '3') {
                this.setState({
                    imgSrc: this.state.imgSrc3,
                    imgSize: this.state.imgSize3,
                    imgPosition: this.state.imgPosition3,

                    mainImage: "3"
                })
            } else if (id === '4') {
                this.setState({
                    imgSrc: this.state.imgSrc4,
                    imgSize: this.state.imgSize4,
                    imgPosition: this.state.imgPosition4,

                    mainImage: "4"
                })
            }
        };
    };

    // tracks to see what color is selected by user
    selectColor = (event) => {
        // console.log(event.target.attributes.name.value)
        let colorSelected = event.target.attributes.name.value;
        this.setState({ color: colorSelected })

        if (colorSelected === "ASS") {
            this.setState(currentState => ({
                ASS: !currentState.ASS,
                MH: false,
                CD: false,
                RD: false,
            }), function () {
                this.favesUpdate();
            })

        } else if (colorSelected === "MH") {
            this.setState(currentState => ({
                ASS: false,
                MH: !currentState.MM,
                CD: false,
                RD: false,
            }), function () {
                this.favesUpdate();
            })
        } else if (colorSelected === "CD") {
            this.setState(currentState => ({
                ASS: false,
                MH: false,
                CD: !currentState.CD,
                RD: false,
            }), function () {
                this.favesUpdate();
            })
        } else if (colorSelected === "RD") {
            this.setState(currentState => ({
                ASS: false,
                MH: false,
                CD: false,
                RD: !currentState.RD,
            }), function () {
                this.favesUpdate();
            })
        }
    };

    // tracks to see what fill is selected by user
    selectFill = (event) => {
        // console.log(event.target.attributes.name.value)
        let fillSelected = event.target.attributes.name.value;
        this.setState({ fill: fillSelected })



        if (fillSelected === "DD") {
            this.setState(currentState => ({
                DD: !currentState.DD,
                HPB: false,
                MF: false
            }), function () {
                this.favesUpdate()
            })
        } else if (fillSelected === "HPB") {
            this.setState(currentState => ({
                DD: false,
                HPB: !currentState.HPB,
                MF: false
            }), function () {
                this.favesUpdate()
            })
        } else if (fillSelected === "MF") {
            this.setState(currentState => ({
                DD: false,
                HPB: false,
                MF: !currentState.MF
            }), function () {
                this.favesUpdate()
            })
        }
    };

    // Adding favorited items and cart items to Local Storage
    addItemToLocalStorage = (event) => {
        let { location } = event.target.attributes;
        // console.log(location)
        const LSlocation = location.value;
        let list = []
        const quant = this.state.quant;
        const type = this.state.product;
        const color = this.state.color;
        const fill = this.state.fill

        const item = { 'quant': quant, 'type': type, 'color': color, 'fill': fill }


        if (JSON.parse(localStorage.getItem(LSlocation)) === null) {
            // Push the item into onto the array 'list'
            list.push(item);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem(LSlocation, JSON.stringify(list));
        } else {
            list = JSON.parse(localStorage.getItem(LSlocation));
            // Push the new item into list
            list.push(item);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem(LSlocation, JSON.stringify(list));
        }

        if (LSlocation === "Cart") {
            console.log('click')
            this.props.cartUpdate();
        }

        if (LSlocation === "Favorite") {
            this.favesUpdate();
        }

    };

    // See if the item was favorited in local storage
    favesUpdate = () => {
        const type = this.state.product;
        const color = this.state.color;
        const fill = this.state.fill

        if (JSON.parse(localStorage.getItem("Favorite")) === null) {
            this.setState({ favorited: false })
            // console.log('running faves - null"')
        } else {
            let list = JSON.parse(localStorage.getItem("Favorite"));
            let products = list.filter(items => items.type === type);
            let colors = products.filter(items => items.color === color);
            let fills = colors.filter(items => items.fill === fill);

            if (products.length === 0 || colors.length === 0 || fills.length === 0) {
                this.setState({ favorited: false })
                // console.log('running faves - false')
            } else if (fills) {
                this.setState({ favorited: true })
                // console.log('running faves - true')
            }


        }


    }

    // change quantity of the item
    changeQuantity = (event) => {
        const change = event.target.attributes.name.value;
        const up = this.state.quant + 1;
        const down = this.state.quant - 1;

        if (change === "up") {
            this.setState({ quant: up })
        } else if (change === "down" && down === 0) {
            this.setState({ quant: 1 })
        } else if (change === "down") {
            this.setState({ quant: down })
        }

    };


    render = () => {
        return (
            <Box>
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
                            addtoFavorites={this.addItemToLocalStorage}
                            addtoCart={this.addItemToLocalStorage}
                            favoritedText={this.state.favorited}
                            changeQuant={this.changeQuantity}
                            prodNum={this.state.quant}
                        />
                        <Box mx={2}>
                            <Box mb={1} mt={3} className='itemSelectTitle'>COLOR</Box>
                            <Grid container direction="row" alignItems="center" justify='space-around' className='coloroptions' >
                                <Grid item className={`customColor ${this.state.ASS ? "selectedColor" : ""}`} >
                                    <Box py={2} mx={2} className="textOpt colorSelect" name="ASS" onClick={this.selectColor}> AFTER SCHOOL SPECIAL</Box>
                                </Grid>
                                <Grid item className={`customColor ${this.state.MH ? "selectedColor" : ""}`} >
                                    <Box py={2} mx={2} className="textOpt colorSelect" name="MH" onClick={this.selectColor} >MORNING HAZE</Box>
                                </Grid>
                                <Grid item className={`customColor ${this.state.CD ? "selectedColor" : ""}`} >
                                    <Box py={2} mx={2} className="textOpt colorSelect" name="CD" onClick={this.selectColor}  >COZY DEMIN</Box>
                                </Grid>
                                <Grid item className={`customColor ${this.state.RD ? "selectedColor" : ""}`}>
                                    <Box py={2} mx={2} className="textOpt colorSelect" name="RD" onClick={this.selectColor} >RAINY DAY</Box>
                                </Grid>
                            </Grid>
                            <Box mb={1} mt={3} className='itemSelectTitle'>PILLOW FILL</Box>
                            <Grid container direction="row" alignItems="center" justify='space-around' className='filloptions' >
                                <Grid item className={`customFill ${this.state.DD ? "selectedFill" : ""}`} >
                                    <Box py={2} px={2} mx={1} className="textOpt fillSelect" onClick={this.selectFill} name="DD">DUCK DOWN</Box>
                                </Grid>
                                <Grid item className={`customFill ${this.state.HPB ? "selectedFill" : ""}`}>
                                    <Box py={2} px={2} mx={1} className="textOpt fillSelect" onClick={this.selectFill} name="HPB">HYPOALLERGENIC POLY-BLEND</Box>
                                </Grid>
                                <Grid item className={`customFill ${this.state.MF ? "selectedFill" : ""}`}>
                                    <Box py={2} px={2} className="textOpt fillSelect" onClick={this.selectFill} name="MF">MEMORY FOAM</Box>
                                </Grid>
                            </Grid>
                        </Box>
                        {this.details()}
                    </Grid>
                </Grid>
                <Tips
                    size={this.state.size}
                    reco={this.state.reco}
                    washShort={this.state.washShort}
                    tipsImg={this.state.tipsImg}
                    tipsImgSize={this.state.tipsImgSize}
                />
                <footer></footer>
            </Box>
        )
    }
}

export default Detail;