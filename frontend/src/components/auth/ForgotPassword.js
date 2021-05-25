import React, { useState } from 'react';
import { Form, Toast } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import rose from "../../images/rose7.jpeg"
import {useHistory, useLocation} from 'react-router-dom';
const api = process.env.REACT_APP_API_URL

export default function ForgotPassword() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [login, setLogin] = useState(false);

    const handleChange = name => (event) => {
        setEmail(event.target.value);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        }

        const fp = await fetch(`${api}/fullUser/fp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email
            })
            }).then( res => res.json())
            .catch(err => {
                alert(err);
        });

        if(fp.success){
            setMessage('Email Sent!');
            setLogin(true);
            setShow(true)
        }else{
            setMessage('User Not Found');
            setLogin(false);
            setShow(true);
        }
    };



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
                    if(login){ history.push('/login') };
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
            <h1 className="title">FORGOT PASSWORD</h1>
        </div>
        <Form noValidate validated={validated} id="fp-form" className="input-form" onSubmit={sendEmail}>
            <Form.Group controlId="login-email">
                <Form.Label>EMAIL ADDRESS</Form.Label>
                <Form.Control required type="email" placeholder="Enter Email" value={email} onChange={handleChange(email)} />
                <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
            </Form.Group>

            <div class="form-buttons">
                <Button variant="outline-dark" type="submit"> 
                    SEND PASSWORD REQUEST
                </Button>

                <a href="/login">
                    <Button variant="outline-dark"> 
                        LOGIN
                    </Button>
                </a>

                <a href="/register">
                    <Button variant="outline-dark"> 
                        REGISTER
                    </Button>
                </a>
            </div>

        </Form>   
    </div>
);
}
