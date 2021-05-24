import React, {useEffect} from 'react';
// import rose from "../../images/rose7.jpeg";
import rose from "../../../images/rose7.jpeg";
import mentor from "../../../images/mentor.svg";
import user from "../../../images/user.svg";
import tree from "../../../images/tree.svg";
import chat from "../../../images/chat.svg";
import Button from "react-bootstrap/Button";
import NavBar from "../../misc/NavBar.js";
import {useHistory} from 'react-router-dom';
import { authenticate } from '../../auth/auth.js'

export default function Mentorship() {
    const history = useHistory();
    const redirectMentors = () => history.push('/mentors');
    const redirectMentees = () => history.push('/mentees');

    useEffect( () => {
        let token = localStorage.getItem('token');
        authenticate(token, history);
    }, [])

return (
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