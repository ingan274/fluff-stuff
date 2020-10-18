import React from "react";
import {
    Link,
} from "react-router-dom";
import "./style.css";
import homeBanner from "../../assets/imgs/home/jonathan-borba-_peqvnRW7tc-unsplash.jpg"
import Grid from '@material-ui/core/Grid';
import Container from "../../components/Container";
import Nav from "../../components/Nav";

const Home = props => (
    <Container>
        <Nav />
        <Grid container justify="center" className='photo' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${homeBanner})` }}>
            <Grid item xs={12} className='bannerText'>pillows designed around you</Grid>
            <Link item to="/shop" className='homeButtonCTA'>lets get comfy</Link>

        </Grid>

        <Grid container className='PColors'>
            <Grid item xs={12} className='title'>colors</Grid>
            <Grid item container xs={12} direction="row"
                justify="space-between"
                alignItems="center"
                className='colorPhotos'>
                <Grid item xs={3} className='color'
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <div className='colorImage school'></div>
                    <p className="imageText photoText">AFTER SCHOOL SPECIAL</p>
                </Grid>
                <Grid item xs={3} className='color'
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <div className='colorImage haze'></div>
                    <p className="imageText photoText">MORNING HAZE</p>
                </Grid>
                <Grid item xs={3} className='color'
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <div className='colorImage demin'></div>
                    <p className="imageText photoText">COZY DEMIN</p>
                </Grid>
                <Grid item xs={3} className='color'
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <div className='colorImage rainy'></div>
                    <p className="imageText photoText">RAINY DAY</p>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className='PFills'>
            <Grid item xs={12} className='title'>pillow fills</Grid>
            <Grid item container xs={12} direction="row"
                justify="space-between"
                alignItems="center"
                className='fillPhotos'>
                <Grid item xs={4}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className='fill'>
                    <div className='fillImage duck'></div>
                    <p className="imageText">DUCK DOWN</p>
                </Grid>
                <Grid item xs={4}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className='fill'>
                    <div className='fillImage polyBlend'></div>
                    <p className="imageText">HYPOALLERGENIC POLY-BLEND</p>
                </Grid>
                <Grid item xs={4}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className='fill'>
                    <div className='fillImage foam'></div>
                    <p className="imageText">MEMORY FOAM</p>
                </Grid>
            </Grid>
        </Grid>

        <Grid container
            justify="center">
            <Link to="/shop" className='homeButtonCTA bottom-button'>shop all pillows</Link>
        </Grid>



        <footer></footer>
    </Container>
)


export default Home;