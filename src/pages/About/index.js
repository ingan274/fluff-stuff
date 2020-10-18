import React from "react";
import "./style.css";
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';
import { Grid, Box } from '@material-ui/core';
import BannerImg from "../../components/bannerImg"

const About = props => (
    <Box>
        <BannerImg bannerSrc="https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3033&q=80" bannerText="fluff stuff makes pillows that match your every stage of life" bannerSize="cover" bannerPosition="center" />

        <div className="stage">
            <h1 className="aboutScroll bounce-1"><ArrowDropDownCircleRoundedIcon /></h1>
        </div>

        <div className='origin'>
            <p className="aboutText">
                We started creating pillows becuase we realized throughout different stages of our lives, we we have
                different
                needs and different colors that are shaped by our environement. We made soft and springy plush pillows, made
                for
                snoozing, relaxing, and accesorizing.
            They have the perfect fill so you can max out on comfort.<br /><br />
                    Learn more below...
        </p>
        </div>

        <Grid container
            justify="center"
            spacing={5}
            className="fillDetails">
            <Grid item container
                direction="row"
                justify="space-around"
                alignItems="center"
                className="fillDeets">
                <Grid item xs={5} className="fillPhoto duck"></Grid>
                <Grid item xs={6} className="details ">
                    <h2 className='filltitle'>duck down</h2>
                    <p className='filldesc'>Down makes for a buoyant, plush pillow because its clusters are incredibly efficient
                    at trapping air. Feathers are less pliant, and play an important role as a "pillow-within-a-pillow"
                    support in creating firmer pillows.</p>
                </Grid>
            </Grid>

            <Grid item container
                direction="row"
                justify="space-around"
                alignItems="center" className="fillDeets">
                <Grid item xs={5} className="fillPhoto polyBlend"></Grid>
                <Grid item xs={6} className="details ">
                    <h2 className='filltitle'>hypoallergenic poly-blend</h2>
                    <p className='filldesc'>Cotton combined with polyester is less prone to pilling and static. Today’s
                    poly-cotton blends are softer than their predecessors. This type of fabric keeps it shape and color
                    longer, it doesn’t shrink, and helps those with extreme allergies.</p>
                </Grid>
            </Grid>

            <Grid item container
                direction="row"
                justify="space-around"
                alignItems="center" className="fillDeets">
                <Grid item xs={5} className="fillPhoto foam"></Grid>
                <Grid item xs={6} className="details ">
                    <h2 className='filltitle'>memory foam</h2>
                    <p className='filldesc'>Memory foam pillows are special because of the heat reactive cushioning insulator.
                    When pressure is applied along with heat, the foam reshapes itself to conform to the object. This is
                    why memory foam pillows shape to the head and neck better than other pillows.</p>
                </Grid>
            </Grid>

        </Grid>
        <footer></footer>
    </Box>
);

export default About;