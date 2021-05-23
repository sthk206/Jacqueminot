import React from 'react';
import NavBar from "../../misc/NavBar.js";
import filler from "../../../images/filler.jpeg"
import Button from "react-bootstrap/Button";

export default function Profile() {
return (
    <div className="grid-container">
        <NavBar/>

        <div className="profile-base center">
            <img width="200px" height="200px" src={filler} alt=""/>
            <div className="grid center">
                <h1>Brother First Last</h1>
                {/* Job Title */}
                <h6>CS student at UC San Diego</h6>
            </div>
            <div className="grid center">
                <h3>Mentor Status</h3>
                <Button variant="success">Open</Button>
            </div>
            <div className="grid center">
                <h3>Mentee Status</h3>
                <Button variant="danger">Closed</Button>
            </div>
        </div>
        <div className="profile-about">
            <h2>About</h2>
            <table cellspacing="0" cellpadding="0">
                <tr>
                    <td><em>Class:</em></td>
                    <td>Sigma</td>
                </tr>
                <tr>
                    <td><em>Major:</em></td>
                    <td>Computer Science</td>
                </tr>
                <tr>
                    <td><em>Graudation Year:</em></td>
                    <td>2021</td>
                </tr>
                <tr>
                    <td><em>Current Occupation:</em></td>
                    <td>Student</td>
                </tr>
                <tr>
                    <td><em>Family:</em></td>
                    <td>Disney</td>
                </tr>
                <tr>
                    <td><em>Additional Information</em></td>

                </tr>
            </table>
            <p>
                {/* <em>Class</em> : Sigma <br/>
                <em>Major</em> : Computer Science <br/>
                <em>Graudation Year</em> : 2021 <br/>
                <em>Current Occupation</em> : Student <br/>
                <em>Family</em> : Disney <br/> */}
                {/* <em>Additional Information</em> : <br/> */}
                Natus dolorem enim perferendis necessitatibus officia ullam aut eius. Aut sit in a harum cupiditate aut. Id vel temporibus sed delectus facere nam voluptatem necessitatibus. Aliquid placeat voluptatibus aspernatur et non.
            </p>

        </div>
        <div className="profile-links">
            <Button>LinkedIn</Button>
            <Button>Facebook</Button>
        </div>



    </div>
);
}