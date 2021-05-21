import React from 'react';
import rose from "../../images/rose7.jpeg";
import mentor from "../../images/mentor.svg";
import user from "../../images/user.svg";
import tree from "../../images/tree.svg";
import chat from "../../images/chat.svg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import {useHistory} from 'react-router-dom';

export default function Mentorship() {
    const history = useHistory();
    const redirectMentors = () => history.push('/mentors');
    const redirectMentees = () => history.push('/mentees');
return (
    // <div className="background">
    //     <h1>sdfjdslkf</h1>
    //             {/* <div class="circle">
    //             </div> */}
    //     <div className="container">
    //         <img height="70" width="70" src={rose} alt=""/>
    //         <h1 className="title">Jacqueminot</h1>
    //     </div>
    //     <div className="container">
    //         <Button className="homepage-button">Profile</Button>
    //         <Button className="homepage-button">Mentorship</Button>
    //         <Button className="homepage-button">Family Trees</Button>
    //         <Button className="homepage-button">Chat</Button>
    //     </div>
    // </div>
    <div className="home-container">
        <NavBar/>

        <div className="home-box">
            <Button onClick={redirectMentors} variant="dark" className="mentorship-button">

                <p className="mentorship-p">I'm looking for a <b>mentor</b>.</p>
            </Button>
            <Button onClick={redirectMentees} variant="dark" className="mentorship-button">
                <p className="mentorship-p">I'm looking for a <b>mentee</b>.</p>
            </Button>

        </div>

    </div>
);
}