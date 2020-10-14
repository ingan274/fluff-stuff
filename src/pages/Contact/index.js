import "./style.css";
import React, { Component } from "react";
import { Grid } from '@material-ui/core';
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