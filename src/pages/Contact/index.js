import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';
import "./style.css";

class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        message: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    render = () => (
        <Box>
            {/* Title */}
            <h1 className='pageHeader'>contact us</h1>

            <Grid container spacing={2} direction="row"
                justify="space-between">

                {/* Contact Form */}
                <Grid item xs={6} className='contact'>
                    <form>
                        <label htmlFor="email">Email</label><br />
                        <input type="text" id="email" name="email" required />

                        <Grid container direction="row" justify="space-around" spacing={3}>
                            <div className='nameinput'>
                                <label htmlFor="fname">First name</label><br />
                                <input type="text" id="fname" name="fname" required />
                            </div>
                            <div className='nameinput'>
                                <label htmlFor="lname">Last name</label><br />
                                <input type="text" id="lname" name="lname" required />
                            </div>
                        </Grid>

                        <label htmlFor="category" className='category'>Category</label><br />
                        <select id="category" name="category">
                            <option>Select</option>
                            <option value="general">General</option>
                            <option value="question">Question</option>
                            <option value="support">Support</option>
                            <option value="Wholesale">Wholesale/Partnerships</option>
                        </select>
                        <br />


                        <label htmlFor="message">Message</label><br />
                        <textarea id="message" name="message" rows="7" cols="30"></textarea>

                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </Grid>

                {/* Contact Info - static */}
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
        </Box>
    )
}

export default Contact;