import React from "react";
import "./style.css";
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';

const About = props => (
    <div>
        <section className='photo'>
            <h2 className='phototext'>fluff stuff makes pillows that match your every stage of life</h2>
        </section>

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
        <section className="fillDetails">

            <div className="fillDeets">
                <div className="fillPhoto duck"></div>
                <div className="details ">
                    <h2 className='filltitle'>duck down</h2>
                    <p className='filldesc'>Down makes for a buoyant, plush pillow because its clusters are incredibly efficient
                    at trapping air. Feathers are less pliant, and play an important role as a "pillow-within-a-pillow"
                    support in creating firmer pillows.</p>
                </div>
            </div>

            <div className="fillDeets">
                <div className="fillPhoto polyBlend"></div>
                <div className="details ">
                    <h2 className='filltitle'>hypoallergenic poly-blend</h2>
                    <p className='filldesc'>Cotton combined with polyester is less prone to pilling and static. Today’s
                    poly-cotton blends are softer than their predecessors. This type of fabric keeps it shape and color
                    longer, it doesn’t shrink, and helps those with extreme allergies.</p>
                </div>
            </div>

            <div className="fillDeets">
                <div className="fillPhoto foam"></div>
                <div className="details ">
                    <h2 className='filltitle'>memory foam</h2>
                    <p className='filldesc'>Memory foam pillows are special because of the heat reactive cushioning insulator.
                    When pressure is applied along with heat, the foam reshapes itself to conform to the object. This is
                    why memory foam pillows shape to the head and neck better than other pillows.</p>
                </div>
            </div>

        </section>
    </div>
);

export default About;