import React, {useEffect} from 'react';
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import HomeNavBar from "../misc/HomeNavBar.js";
import {useHistory, useLocation} from 'react-router-dom';
import { authenticate } from '../auth/auth.js';


export default function About() {
    const history = useHistory();
    const location = useLocation();
    const redirectMentorship = () => history.push('/mentorship');
    const redirectTrees = () => history.push('/trees');
    const redirectProfile = () => history.push('/profile');
    const redirectMessages = () => history.push('/messages');

    // useEffect( () => {
    //     let token = localStorage.getItem('token');
    //     console.log(token); 
    //     authenticate(token, history);
    // }, []);

return (

    <div className="home-container">
        <HomeNavBar/>
        <div className="home-box">
            <img height="150" width="150" src={rose} alt=""/>
        </div>
        <div className="home-box">
            <h1 className="title">About Us</h1>
        </div>
        
        <div className="home-box">
            <h4 style= {{color: 'white'}} className="text"> In an effort to bridge networking between active body
                and alumni, the Psi Pledge Class has created Jacqueminot. The purpose of Jacqueminot is to establish
                a platform for Theta Tau alumni and actives to foster mentorship. Both alumni and actives can search
                for mentors at different stages of their professional career. In addition, it is a way for alumni to
                stay connected with the Theta Tau network and pass on their vast pool of knowledge and experience to 
                the next generation. 
            </h4>
        </div>

        <div className="home-box">
            
            <h4 style= {{color: 'white'}} className="text"> 
                 If you have any questions, comments, or concerns, please contact Dhanvi Desu via email: 

                 ddesu@ucsd.edu

            </h4>
        </div>

    </div>
);
}