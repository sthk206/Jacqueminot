import React, {useEffect, useState} from 'react';
// import rose from "../../images/rose7.jpeg";

import Button from "react-bootstrap/Button";
import NavBar from "../../misc/NavBar.js";
import HomeNavBar from "../../misc/HomeNavBar.js";
import {useHistory} from 'react-router-dom';
import { authenticate } from '../../auth/auth.js'

export default function Mentorship() {
    const history = useHistory();
    const redirectMentors = () => history.push('/mentors');
    const redirectMentees = () => history.push('/mentees');

    const [size, setSize] = useState(window.innerWidth);
    useEffect( () => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        let token = localStorage.getItem('token');
        authenticate(token, history);
        return () => window.removeEventListener('resize', updateSize);
    }, [])

return (
    <div className="home-container">
        {size < 895? <HomeNavBar/> : <NavBar/>}

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