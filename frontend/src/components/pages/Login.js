import React, { useState } from 'react';
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import {useHistory} from 'react-router-dom';
import { Form, Toast } from 'react-bootstrap';
const api = process.env.REACT_APP_API_URL;


export default function Login() {
    const history = useHistory();
    const redirectMentorship = () => history.push('/mentorship');
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [toLogin, setLogin] = useState(false);

    const login = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        }
      
        const username = e.target[0].value;
        const password = e.target[1].value;
      
        const result = await fetch(`${api}/fullUser/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }).then( res => res.json() );

      if(result.success){
          localStorage.setItem('token', result.data);
          history.push('/');
      }else{
          setMessage(result.message);
          setLogin(false);
          setShow(true);
      }
      
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
                    if(toLogin){ history.push('/') };
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
        <Form noValidate validated={validated} className="input-form" onSubmit={login}>
            <Form.Group controlId="login-email">
                <Form.Label>EMAIL ADDRESS</Form.Label>
                <Form.Control required type="email" placeholder="Enter Email" />
                <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
            </Form.Group>


            <Form.Group controlId="login-password">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control required minLength={6} type="password" placeholder="Enter Password" />
                <Form.Control.Feedback type="invalid">Please enter your password</Form.Control.Feedback>
            </Form.Group>


            <div class="form-buttons">
                <Button variant="outline-dark" type="submit"> 
                    LOGIN
                </Button>

                <a href="/register">
                    <Button variant="outline-dark"> 
                        REGISTER
                    </Button>
                </a>

                <a href="/fp">
                    <Button variant="outline-dark"> 
                        FORGOT PASSWORD
                    </Button>
                </a>
            </div>
        </Form>

    </div>
);
}