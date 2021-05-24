import React from 'react';
import NavBar from "../../misc/NavBar.js";
import filler from "../../../images/filler.png"

import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

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
            <div className="center">
                <h5>Mentor Status: </h5>
                <BootstrapSwitchButton
                    // onlabel='&#x2713;'
                    onlabel=' '
                    onstyle='success'
                    // offlabel='&#10007;'
                    offlabel=' '
                    offstyle='danger'
                    // onChange={(checked) => {
                    //     if(checked) CheckOff(event._id);
                    //     else UnCheckOff(event._id);
                    // }}
                />
                {/* <Button variant="success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </Button> */}
            </div>
            <div className="center">
                <h5>Mentee Status: </h5>
                {/* <Button variant="danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </Button> */}
                <BootstrapSwitchButton
                    // onlabel='&#x2713;'
                    onlabel=' '
                    onstyle='success'
                    // offlabel='&#10007;'
                    offlabel=' '
                    offstyle='danger'
                    // onChange={(checked) => {
                    //     if(checked) CheckOff(event._id);
                    //     else UnCheckOff(event._id);
                    // }}
                />
            </div>
        </div>
        <div className="profile-about">
            <h2>About</h2>
            <table cellSpacing="0" cellPadding="0">
                <tbody>

                    <tr>
                        <td><em>Class:</em></td>
                        <td>Sigma</td>
                    </tr>
                    <tr>
                        <td><em>Email:</em></td>
                        <td>firstlast@gmail.com</td>
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
                        <td><em>Additional Information:</em></td>

                    </tr>
                </tbody>
            </table>
            <p className="add-info">
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