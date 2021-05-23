import React from 'react';
import NavBar from "../misc/NavBar.js";
import rose from "../../images/rose7.jpeg";
import Button from "react-bootstrap/Button";
import {useHistory} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function Register2() {
return (
    <div className="home-container">
        <div className="home-box">
            <img height="70" width="70" src={rose} alt=""/> 
            <h1 className="title">JACQUEMINOT</h1>
        </div>
        <Form className="register2-form">
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
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="year" placeholder="Enter Graduation Year" />
                </Form.Group>
            </Form.Row>


            <Form.Group controlId="register2-occupation">
                <Form.Label>CURRENT OCCUPATION</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Please describe your occupation(s): Student, Product Management, UI/UX Design, etc." />
            </Form.Group>

            <Form.Group controlId="register2-info">
                <Form.Label>ADDITIONAL INFO</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Please tell us more about yourself!" /> 
            </Form.Group>

            <Button variant="outline-dark">
                <a href="/" class="homelink">
                    Sign Up
                </a>
            </Button>

        </Form>
    </div>
);
}