import React from 'react';
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import HomeNavBar from "../misc/HomeNavBar.js";
import {useHistory} from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const redirectMentorship = () => history.push('/mentorship');
    const redirectTrees = () => history.push('/trees');
    const redirectProfile = () => history.push('/profile');
    const redirectMessages = () => history.push('/messages');
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
        <HomeNavBar/>
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/>
            <h1 className="title">JACQUEMINOT</h1>
        </div>

        <div className="home-box">
            <Button onClick={redirectProfile} variant="dark" className="home-button">
                {/* <img height="50" width="50" src={user} alt=""/> */}
                <div className="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="home-svg" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <p>PROFILE</p>
                </div>
            </Button>
            <Button onClick={redirectMentorship} variant="dark" className="home-button">
                {/* <img height="50" width="50" src={mentor} alt=""/> */}
                <div className="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="home-svg" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg>
                    <p>MENTORSHIP</p>
                </div>
            </Button>
            <Button onClick={redirectTrees} variant="dark" className="home-button">
                {/* <img height="50" width="50" src={tree} alt=""/> */}
                <div className="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="home-svg" viewBox="0 0 16 16">
                        <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z"/>
                    </svg>
                    <p>FAMILY TREES</p>
                </div>
            </Button>
            <Button onClick={redirectMessages} variant="dark" className="home-button">
                {/* <img height="50" width="50" src={chat} alt=""/> */}
                <div className="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="home-svg" viewBox="0 0 16 16">
                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                    </svg>
                    <p>MESSAGE</p>
                </div>
            </Button>
        </div>

    </div>
);
}