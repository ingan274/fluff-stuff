import "./style.css";
import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import "./style.css";

class Contact extends Component {
    state = {
        product: "",
        price: "",
        description: "",
        washLong: "",
        washShort: "",
        shipping: "",
        reco: "",
        size: "",

        color:'',
        fill:'',
        quant:''
    };

    componentDidMount = () => {
        const { handle } = this.props.match.params

        if (handle === "bed-pillow") {
            this.setState({
                product: 'bed pillow',
                price: '$32.99',
                description: '',
                washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Hang to dry.',
                washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert in at a low temp. Hang dry the outside cover.',
                reco:"Bed, Lumbar, Bench",
                size:"18' x 18'"
            })
        } else if (handle === "couch-pillow") {
            this.setState({
                product: 'couch pillow',
                price: '$42.99',
                description: '',
                washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Hang to dry.',
                washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert in at a low temp. Hang dry the outside cover.',
                reco:"Lumbar, Sofa, Car, Patio",
                size:"25' x 25'"
            })
        } else if (handle === "round-pillow") {
            this.setState({
                product: 'round pillow',
                price: '$30.99',
                description: '',
                washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Hang to dry.',
                washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert in at a low temp. Hang dry the outside cover.',
                reco:"Bed, Sofa, Chair, Patio",
                size:"15' x 15'"
            })
        } else if (handle === "floor-pouf-pillow") {
            this.setState({
                product: 'floor pouf pillow',
                price: '$45.99',
                description: '',
                washShort: 'Low temputure water (30°) | neutral detergent | Do not bleach | ≤110°Ironing | Hang to dry.',
                washLong: 'Machine washable. Remove the cover from the insert. Wash both in cold tempurature water and use natural detergent. Put two tennis balls in the dryer and put the insert in at a low temp. Hang dry the outside cover.',
                reco:"Bed, Sofa, Car, Patio",
                size:"28' x 28'"
            })
        } 
    }


    render = () => (
        <div>
            <h1 class='pageHeader'>contact us</h1>
            <Grid container spacing={2} direction="row"
                justify="space-between">
                <Grid item xs={6} class='contact'>
                    <form>
                        <label for="email">Email</label><br />
                        <input type="text" id="email" name="email" required />

                        <Grid container direction="row" justify="space-around" spacing={3}>
                            <div class='nameinput'>
                                <label for="fname">First name</label><br />
                                <input type="text" id="fname" name="fname" required />
                            </div>
                            <div class='nameinput'>
                                <label for="lname">Last name</label><br />
                                <input type="text" id="lname" name="lname" required />
                            </div>
                        </Grid>

                        <label for="category" class='category'>Category</label><br />
                        <select id="category" name="category">
                            <option>Select</option>
                            <option value="general">General</option>
                            <option value="question">Question</option>
                            <option value="support">Support</option>
                            <option value="Wholesale">Wholesale/Partnerships</option>
                        </select>
                        <br />


                        <label for="message">Message</label><br />
                        <textarea id="message" name="message" rows="7" cols="30"></textarea>

                        <input class="submit" type="submit" value="Submit" />
                    </form>
                </Grid>
                <Grid item xs={5} class='contactInfo'>
                    <div class='location'>
                        <h3 class='infoTitle'>locaton</h3>
                        <p class='information'>123 Somewhere St.<br />Pittsburgh, PA 15213</p>
                        <p class='information'><span class='bold'>Monday - Saturday</span><br /> 8:00AM - 9:00PM EST</p>



                    </div>

                    <div class='phoneNumber'>
                        <h3 class='infoTitle'>phone number</h3>
                        <p class='information'>
                            <span class='bold'>Customer Service:</span><br />+1 (123) 345 - 5678</p>

                        <p class='information'>
                            <span class='bold'>Wholesale/Partnerships</span><br />+1 (901) 123 - 3456</p>


                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;