import React from 'react';
import NavBar from "../../misc/NavBar.js";
import filler from "../../../images/filler.png"
import Button from "react-bootstrap/Button"

export default function Mentees() {
return (
    <div className="mentor-container">
        <NavBar/>
        <h1 className="mentor">Mentees</h1>
        <div className="mentor-placard">
            <img width="150px" height="150px" src={filler} alt=""/>
            <span>
                <h1>Brother First Last</h1>
                <table cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr>
                            <td><em>Class:</em></td>
                            <td>Sigma</td>
                        </tr>
                        <tr>
                            <td><em>Major:</em></td>
                            <td>Computer Science</td>
                        </tr>
                        <tr>
                            <td><em>Occupation:</em></td>
                            <td>Student</td>
                        </tr>
                    </tbody>
                </table>
                <Button variant="dark" className="mentor-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="home-svg" viewBox="0 0 16 16">
                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                    </svg>
                    <p>Message</p>
                </Button>
            </span>
        </div>


    </div>
);
}