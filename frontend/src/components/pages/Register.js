import React from 'react';
import NavBar from "../misc/NavBar.js";
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import {useHistory} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Register() {

    const history = useHistory();

    const moveOn = (e) => {
        e.preventDefault();
        console.log(e);

        const temp = {
            first: e.target[0].value,
            last: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            confirm: e.target[4].value,
        }

        console.log(temp);

        history.push({
            pathname: '/register2',
            state: temp,
        }); 
    }

return (
    <div className="home-container">
            <div className="home-box">
                <img height="70" width="70" src={rose} alt=""/> 
                <h1 className="title">JACQUEMINOT</h1>
            </div>
        <Form className="register-form" onSubmit={moveOn}>

            <Form.Row>
                    <Form.Group as={Col} controlId="register-first">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="register-last">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
            </Form.Row>
           

            <Form.Group controlId="register-email">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="register-password">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="register-reenter">
                <Form.Label>RE-ENTER PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Re-Enter password" /> 
            </Form.Group>

            <Button variant="outline-dark" type="submit">
                    CONTINUE
            </Button>
            
            <a href="/login">
                Already have an account? Sign in
            </a>

        </Form>

    </div>
);
}