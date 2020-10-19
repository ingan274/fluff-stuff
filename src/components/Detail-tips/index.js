import React, {Component} from "react";
import { Box } from '@material-ui/core';
import "./style.css";

class Tips extends Component {

    render = () => {
        const style = {
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('${this.props.tipsImg}') center`,
            backgroundSize: `${this.props.tipsImgSize}`,
            height: '450px',
            position: 'relative',
            margin: '40px 0px',
            fontFamily: 'var(--body-font)',
        }


        return (
            <Box mt={2} className='product-notes' style={style} >
                <div id='product-stat'>
                    <h4 id='note-title'>fluff stuff's notes</h4>
                    <table id='notes-table'>
                        <thead>
                            <tr id='header-row'>
                                <th className='table-title'>Size</th>
                                <th className='table-title middleCell'>Best for</th>
                                <th className='table-title'>How to Use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='table-info'>{this.props.size}</td>
                                <td className='table-info middleCell'>
                                    <p>{this.props.reco}</p>
                                </td>
                                <td className='table-info'>{this.props.washShort}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Box>
        )
    }
}

export default Tips;

