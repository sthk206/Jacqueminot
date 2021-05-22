import React from 'react';
//import { Link } from "react-router-dom";
//import Routes from "../pages/Routes";
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import rose from "../../images/rose7.jpeg";

export default function NavBar() {
return (
    <>
      <Navbar fixed="top" variant="dark" className="navbar">
        <img height="40" width="40" src={rose} alt=""/>
        <Navbar.Brand href="/">Jacqueminot</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/mentorship">Mentorship</Nav.Link>
            <Nav.Link href="/trees">Family Trees</Nav.Link>
        </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form> */}
    </Navbar>
    </>
);
}