import React from 'react';
import NavBar from "../misc/NavBar.js";
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import {useHistory} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Register() {
return (
    <div className="home-container">
        <NavBar/>
            <div className="home-box">
                <img height="70" width="70" src={rose} alt=""/> 
                <h1 className="title">Jacqueminot</h1>
            </div>
        <Form className="register-form">

            <Form.Row>
                    <Form.Group as={Col} controlId="register-first">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="firstName" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="register-last">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" placeholder="Enter Last Name" />
                    </Form.Group>
            </Form.Row>
           

            <Form.Group controlId="register-email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="register-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="register-reenter">
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Re-Enter Password" /> 
            </Form.Group>

            <Button variant="outline-dark" type="Sign Up">
                <a href="/Register2" class="link"> 
                    Continue
                </a>
            </Button>
            
            <a href="/login">
                Already have an account? Sign in
            </a>

        </Form>

    </div>
);
}