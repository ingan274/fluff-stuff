import "./style.css";
import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import "./style.css";

class Contact extends Component {
    state = {
        cartTotal: 0,
        ProductTotal: 0,
        products: [],
    }

    // get from local storage, sort, and reorgnize

    // Remove item

    // change quantity of item

    // calculate total cost

    // calculate subrtotal cost

    render = () => (
        <div>
            <h1 className='pageHeader'>contact us</h1>
            <Grid container spacing={2} direction="row"
                justify="space-between">
                <Grid item xs={6} className='contact'>
                    <form>
                        <label for="email">Email</label><br />
                        <input type="text" id="email" name="email" required />

                        <Grid container direction="row" justify="space-around" spacing={3}>
                            <div className='nameinput'>
                                <label for="fname">First name</label><br />
                                <input type="text" id="fname" name="fname" required />
                            </div>
                            <div className='nameinput'>
                                <label for="lname">Last name</label><br />
                                <input type="text" id="lname" name="lname" required />
                            </div>
                        </Grid>

                        <label for="category" className='category'>Category</label><br />
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

                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </Grid>
                <Grid item xs={5} className='contactInfo'>
                    <div className='location'>
                        <h3 className='infoTitle'>locaton</h3>
                        <p className='information'>123 Somewhere St.<br />Pittsburgh, PA 15213</p>
                        <p className='information'><span className='bold'>Monday - Saturday</span><br /> 8:00AM - 9:00PM EST</p>



                    </div>

                    <div className='phoneNumber'>
                        <h3 className='infoTitle'>phone number</h3>
                        <p className='information'>
                            <span className='bold'>Customer Service:</span><br />+1 (123) 345 - 5678</p>

                        <p className='information'>
                            <span className='bold'>Wholesale/Partnerships</span><br />+1 (901) 123 - 3456</p>


                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;