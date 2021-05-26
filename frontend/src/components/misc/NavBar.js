import React from 'react';
import {useHistory} from 'react-router-dom';

//import { Link } from "react-router-dom";
//import Routes from "../pages/Routes";
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import rose from "../../images/rose7.jpeg";

export default function NavBar() {
    const history =  useHistory();

    const redirectMentorship = () => history.push('/mentorship');
    const redirectTrees = () => history.push('/trees');
    const redirectProfile = () => history.push('/profile');
    const redirectMessages = () => history.push('/messages');
    const redirectAbout = () => history.push('/about');
    //logout
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login');      
    }
return (
    <>
      <Navbar fixed="top" variant="dark" className="navbar">
        <img height="40" width="40" src={rose} alt=""/>
        <Navbar.Brand href="/">JACQUEMINOT</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link onClick={redirectProfile} >PROFILE</Nav.Link>
            <Nav.Link onClick={redirectMentorship}>MENTORSHIP</Nav.Link>
            <Nav.Link onClick={redirectTrees}>FAMILY TREES</Nav.Link>
            <Nav.Link onClick={redirectMessages}>MESSAGE</Nav.Link>
            <Nav.Link onClick={redirectAbout}>ABOUT US</Nav.Link>
            <Nav.Link onClick={logout}>LOGOUT</Nav.Link>
        </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form> */}
    </Navbar>
    </>
);
}