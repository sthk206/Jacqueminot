import React from 'react';
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import {useHistory} from 'react-router-dom';
import { Form } from 'react-bootstrap';

export default function Login() {
    const history = useHistory();
    const redirectMentorship = () => history.push('/mentorship');

    const login = async (e) => {
        e.preventDefault();
      
        const username = e.target[0].value;
        const password = e.target[1].value;
      
        const result = await fetch('http://localhost:5000/fullUser/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }).then( res => res.json() );
      
        if(result.status === 'ok'){
          localStorage.setItem('token', result.data);
          history.push({
              pathname: '/',
              loggedIn: true
          })
        }else {
          alert (result.error);
        }
      
      }

return (
    
    <div className="home-container">
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/>
            <h1 className="title">JACQUEMINOT</h1>
        </div>
        <Form className="login-form" onSubmit={login}>
            <Form.Group controlId="login-email">
                <Form.Label>EMAIL ADDRESS</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="login-password">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="outline-dark" type="submit"> 
                SUBMIT
            </Button>

            <a href="/register">
                Don't have an account? Sign up
            </a>



        </Form>

    </div>
);
}