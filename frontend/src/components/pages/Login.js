import React from 'react';
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import {useHistory} from 'react-router-dom';
import { Form } from 'react-bootstrap';

export default function Login() {
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
        <NavBar/>
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/>
            <h1 className="title">Jacqueminot</h1>
        </div>
        <Form className="login-form">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="outline-dark">
                <a href="/" class="homelink"> 
                    Submit
                </a>
            </Button>

            <a href="/register">
                Don't have an account? Sign up
            </a>



        </Form>

    </div>
);
}