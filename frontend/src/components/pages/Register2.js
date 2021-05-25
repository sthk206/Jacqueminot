import React from 'react';
import NavBar from "../misc/NavBar.js";
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import {useHistory, useLocation} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const api = process.env.REACT_APP_API_URL

export default function Register2() {

    const history = useHistory();
    const location = useLocation();
    const redirectRegister = () => history.push('/register');

    const register = async (e) => {
        e.preventDefault();
      
        const temp = {
            clss: e.target[0].value,
            fam: e.target[1].value,
            major: e.target[2].value,
            year: e.target[3].value,
            occupation: e.target[4].value,
            organization: e.target[5].value,
            additional: e.target[6].value,
            fb: e.target[7].value,
            linkedin: e.target[8].value,
        }
        const {first, last, email, password, confirm} = location.state;
        
      
        const result = await fetch(`${api}/fullUser/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: email,
            password: password,
            first: first,
            last: last,
            clss: temp.clss,
            fam: temp.fam,
            year: temp.year,
            major: temp.major,
            occupation: temp.occupation,
            organization: temp.organization,
            additional: temp.additional,
            fb: temp.fb,
            linkedin: temp.linkedin,
          })
        }).then( res => res.json() );
      
        if(result.success){
          localStorage.setItem('token', result.data);
          history.push({
              pathname: '/',
              loggedIn: true,
          })
        }else {
          alert (result.error);
        }
      };
      

return (
    <div className="home-container">
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/> 
            <h1 className="title">JACQUEMINOT</h1>
        </div>
        <Form className="register2-form" onSubmit={register}>
            <Form.Row>
                <Form.Group as={Col} controlId="register2-class">
                    <Form.Label>CLASS</Form.Label>
                    <Form.Control as="select" defaultValue = "Select Class...">
                        <option disabled>Select Class...</option>
                        <option>Charter</option>
                        <option>Alpha</option>
                        <option>Beta</option>
                        <option>Gamma</option>
                        <option>Delta</option>
                        <option>Epsilon</option>
                        <option>Zeta</option>
                        <option>Eta</option>
                        <option>Theta</option>
                        <option>Iota</option>
                        <option>Kappa</option>
                        <option>Lambda</option>
                        <option>Mu</option>
                        <option>Nu</option>
                        <option>Xi</option>
                        <option>Omicron</option>
                        <option>Pi</option>
                        <option>Rho</option>
                        <option>Sigma</option>
                        <option>Tau</option>
                        <option>Upsilon</option>
                        <option>Phi</option>
                        <option>Chi</option>
                        <option>Psi</option>
                    </Form.Control>
                </Form.Group>
                

                <Form.Group as={Col} controlId="register2-family">
                    <Form.Label>FAMILY</Form.Label>
                    <Form.Control as="select" defaultValue="Select Family..."> 
                        <option disabled>Select Family...</option>
                        <option>OG</option>
                        <option>Disney</option>
                        <option>Oranges</option>
                        <option>TNA</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>


            <Form.Row>
                <Form.Group as={Col} controlId="register2-major">
                        <Form.Label>MAJOR</Form.Label>
                        <Form.Control as="select" defaultValue="Select Major...">
                            <option disabled>Select Major...</option>
                            <option>Aerospace Engineering</option>
                            <option>Bioengineering</option>
                            <option>Chemical Engineering</option>
                            <option>Computer Science</option>
                            <option>Computer Engineering</option>
                            <option>Electrical Engineering</option>
                            <option>Environmental Engineering</option>
                            <option>Mechanical Engineering</option>
                            <option>Structural Engineering</option>
                            <option>Math-Computer Science</option>
                            <option>Data Science</option>
                            <option>Other (Please manually edit your major in the Edit Profle page)</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="register2-year">
                    <Form.Label>YEAR</Form.Label>
                    <Form.Control type="year" placeholder="Enter Graduation Year" />
                </Form.Group>
            </Form.Row>


            <Form.Group controlId="register2-occupation">
                <Form.Label>CURRENT OCCUPATION</Form.Label>
                <Form.Control type="text" placeholder="Student, Product Management, UI/UX Design, etc." />
            </Form.Group>
            <Form.Group controlId="register2-organization">
                <Form.Label>Organization</Form.Label>
                <Form.Control type="text" placeholder="UC San Diego, Amazon, Google, etc." />
            </Form.Group>

            <Form.Group controlId="register2-info">
                <Form.Label>ADDITIONAL INFO</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Please tell us more about yourself!" /> 
            </Form.Group>

            <Form.Group controlId="register2-facebook">
                <Form.Label>FACEBOOK PROFILE</Form.Label>
                <Form.Control type="text" placeholder="https://www.facebook.com/xxxxxxx" />
            </Form.Group>
            <Form.Group controlId="register2-linkedin">
                <Form.Label>LINKEDIN LINK</Form.Label>
                <Form.Control type="text" placeholder="https://www.linkedin.com/xxxxxxx" />
            </Form.Group>

            <Button variant="outline-dark" type='submit'>
                Sign Up
            </Button>
            <Button variant="outline-dark" onClick={redirectRegister}>
                Back
            </Button>

        </Form>
    </div>
);
}