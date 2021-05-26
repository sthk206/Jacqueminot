import React, {useEffect} from 'react';
import rose from "../../images/rose7.jpeg";
import HomeNavBar from "../misc/HomeNavBar.js";


export default function About() {
 

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
            <h5 style= {{color: 'white'}} className="text"> In an effort to bridge networking between active body
                and alumni, the Psi Pledge Class has created Jacqueminot. The purpose of Jacqueminot is to establish
                a platform for Theta Tau alumni and actives to foster mentorship. Both alumni and actives can search
                for mentors at different stages of their professional career. In addition, it is a way for alumni to
                stay connected with the Theta Tau network and pass on their vast pool of knowledge and experience to 
                the next generation. 
            </h5>
        </div>

        <div className="home-box">
            
            <h5 style= {{color: 'white'}} className="text"> 
                 If you have any questions, comments, or concerns, please contact Dhanvi Desu via email: 

                 ddesu@ucsd.edu

            </h5>
        </div>

    </div>
);
}