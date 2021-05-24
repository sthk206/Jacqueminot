import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import rose from "../../images/rose7.jpeg"
import {useHistory, useLocation} from 'react-router-dom';
const api = process.env.REACT_APP_API_URL

export default function ForgotPassword() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [messageFromServer, setMessageFromServer] = useState('');
    const [showNullError, setShowNullError] = useState(false);

    const handleChange = name => (event) => {
        setEmail(event.target.value);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (email === '') {
            setShowError(false)
            setMessageFromServer('');
            setShowNullError(false);
        } else {

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
                history.push('/login');
                // alert('email sent'); move alert later
            }else{
                alert("Email not found");
            }
        }
    };


return (
    <div className="home-container">
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/>
            <h1 className="title">FORGOT PASSWORD</h1>
        </div>
        <Form className="login-form" onSubmit={sendEmail}>
            <Form.Group controlId="login-email">
                <Form.Label>EMAIL ADDRESS</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={handleChange(email)} />

            </Form.Group>

            <Button variant="outline-dark" type="submit"> 
                RESET
            </Button>

            <a href="/register">
                <p>Don't have an account? Sign up!</p>
            </a>

            <a href="/login">
                <p>Know your password? Log in! &nbsp; &nbsp; &nbsp;</p>
            </a>

        </Form>   
    </div>
);
}
