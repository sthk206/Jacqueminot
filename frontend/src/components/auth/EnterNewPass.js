import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import rose from "../../images/rose7.jpeg"
import {useHistory, useLocation} from 'react-router-dom';
const api = process.env.REACT_APP_API_URL

export default function ForgotPassword(props) {
    const history = useHistory();
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    // const [showError, setShowError] = useState(false);
    // const [messageFromServer, setMessageFromServer] = useState('');
    // const [showNullError, setShowNullError] = useState(false);

    useEffect(() => {
        console.log('---')
        verify();
    },[]);

    const verify = async () => {
        //confirm url is valid => allow password reset
        const temp = await fetch(`${api}/fullUser/resetValid/${props.match.params.token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
        console.log(temp);
        if(temp.success){
            setPass(temp.pass)
            setName(temp.first)
        }else{
            //error page?
            history.push('/login');
        }
        
    }

    //update password
    const update = async (e) => {
        e.preventDefault();

        console.log(pass);
        console.log(e.target[0].value)
        console.log(e.target[1].value)

        const temp = await fetch(`${api}/fullUser/resetPassword`, {
            method: 'POST',
            body: JSON.stringify({
                token: props.match.params.token,
                original:pass,
                new1:e.target[0].value,
                new2:e.target[1].value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());

        if(temp.success){
            history.push('/login');
        }else{
            alert(temp.message);
        }
    }


return (
    <div className="home-container">
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/>
            <h1 className="title">Reset Password, {name}?</h1>
        </div>
        <Form className="login-form" onSubmit={update}>

            <Form.Group controlId="register-password">
                <Form.Label>NEW PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="register-reenter">
                <Form.Label>RE-ENTER NEW PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Re-Enter password" /> 
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
