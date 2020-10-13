import React from "react";
import {
    Link,
} from "react-router-dom";
import "./style.css";
import homeBanner from "../../assets/imgs/home/jonathan-borba-_peqvnRW7tc-unsplash.jpg"

const Home = props => (
    <body>
        <div className='photo' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${homeBanner})` }}>
            <h1 className='phototext'>pillows designed around you</h1>
            <Link to="/shop" className='homeButtonCTA'>lets get comfy</Link>
        </div>
        <section class='PColors'>
            <h1 class='title'>colors</h1>
            <div class='colorPhotos'>
                <div class='color'>
                    <div class='colorImage school'></div>
                    <p class="imageText photoText">AFTER SCHOOL SPECIAL</p>
                </div>
                <div class='color'>
                    <div class='colorImage haze'></div>
                    <p class="imageText photoText">MORNING HAZE</p>
                </div>
                <div class='color'>
                    <div class='colorImage demin'></div>
                    <p class="imageText photoText">COZY DEMIN</p>
                </div>
                <div class='color'>
                    <div class='colorImage rainy'></div>
                    <p class="imageText photoText">RAINY DAY</p>
                </div>
            </div>
        </section>
        <section class='PFills'>
            <h1 class='title'>pillow fills</h1>
            <div class='fillPhotos'>
                <div class='fill'>
                    <div class='fillImage duck'></div>
                    <p>DUCK DOWN</p>
                </div>
                <div class='fill'>
                    <div class='fillImage polyBlend'></div>
                    <p>HYPOALLERGENIC POLY-BLEND</p>
                </div>
                <div class='fill'>
                    <div class='fillImage foam'></div>
                    <p>MEMORY FOAM</p>
                </div>
            </div>

        </section>
        <div class='button-shop'>
            <a href="./all-prod.html" class='homeButtonCTA '>shop all pillows</a>
        </div>
    </body>
)


export default Home;