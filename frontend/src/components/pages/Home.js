import React from 'react';
import rose from "../../images/rose5.jpeg";
import mentor from "../../images/mentor.svg";
import user from "../../images/user.svg";
import tree from "../../images/tree.svg";
import chat from "../../images/chat.svg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import {useHistory} from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const redirectMentorship = () => history.push('/mentorship');
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
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/>
            <h1 className="title">Jacqueminot</h1>
        </div>

        <div className="home-box">
            <Button variant="dark" className="home-button">
                <img height="50" width="50" src={user} alt=""/>
                <p>Profile</p>
            </Button>
            <Button onClick={redirectMentorship} variant="dark" className="home-button">
                <img height="50" width="50" src={mentor} alt=""/>
                <p>Mentorship</p>
            </Button>
            <Button variant="dark" className="home-button">
                <img height="50" width="50" src={tree} alt=""/>
                <p>Family Trees</p>
            </Button>
            <Button variant="dark" className="home-button">
                <img height="50" width="50" src={chat} alt=""/>
                <p>Message</p>
            </Button>
        </div>

    </div>
);
}