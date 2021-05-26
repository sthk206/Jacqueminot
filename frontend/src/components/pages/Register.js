import React, { useState, useEffect} from 'react';
import NavBar from "../misc/NavBar.js";
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import {useHistory} from 'react-router-dom';
import { Form, Toast } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useFormik } from 'formik';
const api = process.env.REACT_APP_API_URL

export default function Register() {
    const history = useHistory();
    const [validated, setValidated] = useState(false)
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');

    //move to second page
    const moveOn = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        }

        const temp = {
            first: e.target[0].value,
            last: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            confirm: e.target[4].value,
        }
        
        //check email
        const res = await fetch(`${api}/fullUser/email/${temp.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( res => res.json())
            .catch(err => {
                alert(err);
        });

        if(res.user !== null){
            setMessage('That email is taken!');
            setShow(true)
            return;
        }

        if(temp.password !== temp.confirm){
            setMessage('Passwords do not match!');
            setShow(true)
            return;
        }

        history.push({
            pathname: '/register2',
            state: temp,
        }); 
    }

return (
    <div className="home-container">

        {/* {PopUp} */}
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'absolute',
                minHeight: '100px',
                minWidth:'200px',
                top: '2%',
                width: '10%',
            }}
            >
            <Toast
                style={{
                position: 'absolute',
                top: 0,
                right: 0,
                textAlign:'center'
                }}
                show={show}
                autohide
                delay={3000}
                onClose={() => {
                    setShow(false);
                }}
            >
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Message</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>

        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/> 
            <h1 className="title">JACQUEMINOT</h1>
        </div>
        <Form noValidate validated={validated} className="input-form register-form" onSubmit={moveOn}>

            <Form.Row>
                    <Form.Group as={Col} controlId="register-first">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control required type="text" placeholder="Enter First Name" />
                        <Form.Control.Feedback type="invalid">Please enter a first name</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="register-last">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Last Name" />
                            <Form.Control.Feedback type="invalid">Please enter a last name</Form.Control.Feedback>
                    </Form.Group>
            </Form.Row>
           

            {/* {Check as they are typing??} */}
            <Form.Group controlId="register-email">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control required minLength={3} type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="register-password">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control required minLength={6} type="password" placeholder="Password" />
                <Form.Control.Feedback type="invalid">Password must be at least 6 characters</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="register-reenter">
                <Form.Label>RE-ENTER PASSWORD</Form.Label>
                <Form.Control required minLength={6} type="password" placeholder="Re-Enter password"/>
                <Form.Control.Feedback type="invalid">Re-type your psasword</Form.Control.Feedback>
            </Form.Group>

            <div class="form-buttons">
                <Button variant="outline-dark" type="submit"> 
                    CONTINUE
                </Button>

                <a href="/login">
                    <Button variant="outline-dark"> 
                        RETURN TO LOGIN
                    </Button>
                </a>
            </div>

        </Form>

    </div>
);
}