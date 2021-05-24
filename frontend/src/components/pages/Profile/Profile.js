import React, {useEffect, useState} from 'react';
import NavBar from "../../misc/NavBar.js";
import filler from "../../../images/filler.png"
import {useHistory, useLocation} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { authenticate, getUser } from '../../auth/auth.js'

export default function Profile() {
    const [user, setUser] = useState({});
    const history = useHistory();


    useEffect( () => {
        let token = localStorage.getItem('token');
        authenticate(token, history);
        getUser(token).then(res => {setUser(res)});
    }, [])



    const updateBeMentee = async (e) => {
        console.log(e);
        const result = await fetch('http://localhost:5000/fullUser/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "token": localStorage.getItem('token'),
                "beMentee":e
            })
          }).then( res => res.json() );
        
          console.log(result);
    } 

    const edit = () => {
        history.push({
            pathname: '/editprofile',
            user
        });
    }

    const updateBeMentor = async (e) => {
        console.log(e);
        const body = {
            "token": localStorage.getItem('token'),
            "beMentor":e
        } 
        console.log(body);
        const result = await fetch('http://localhost:5000/fullUser/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          }).then( res => res.json() );
        
          console.log(result);;
    } 

    const changePass = () => {
        
    };

return (
    <div className="grid-container">
        <NavBar/>

        <div className="profile-base center">
            <img width="200px" height="200px" src={`http://localhost:5000/${user.pfp}`} alt=""/>
            <div className="grid center">
                <h1>{user.first} {user.last}</h1>
                {/* Job Title */}
                <h6> {user.occupation} at {user.org}</h6>
            </div>
            <div className="center">
                <h5>Looking for Mentor: </h5>
                <BootstrapSwitchButton
                    checked={user.beMentee}
                    onlabel=' '
                    onstyle='success'
                    offlabel=' '
                    offstyle='danger'
                    onChange={updateBeMentee}
                />
            </div>
            <div className="center">
                <h5>Looking for Mentee</h5>
                <BootstrapSwitchButton
                    checked={user.beMentor}
                    onlabel=' '
                    onstyle='success'
                    offlabel=' '
                    offstyle='danger'
                    onChange={updateBeMentor}
                />
            </div>
        </div>
        <div className="profile-about">

            <h2>About</h2>
            <table cellSpacing="0" cellPadding="0">
                <tbody>

                    <tr>
                        <td><em>Class:</em></td>
                        <td>{user.clss}</td>
                    </tr>
                    <tr>
                        <td><em>Email:</em></td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td><em>Major:</em></td>
                        <td>{user.major}</td>
                    </tr>
                    <tr>
                        <td><em>Graudation Year:</em></td>
                        <td>{user.year}</td>
                    </tr>
                    <tr>
                        <td><em>Current Occupation:</em></td>
                        <td>{user.occupation}</td>
                    </tr>
                    <tr>
                        <td><em>Family:</em></td>
                        <td>{user.fam}</td>
                    </tr>
                    <tr>
                        <td><em>Additional Information:</em></td>
                    </tr>
                </tbody>
            </table>
            <p className="add-info">
                {user.additional}
            </p>

            <div className="profile-links">
                <a href={user.fb} target="_blank" rel="noopener noreferrer">
                    <Button>Facebook</Button>
                </a>

                <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button>LinkedIn</Button>
                </a>

                <span onClick={edit}><Button>Edit Profile</Button></span>
            </div>

        </div>
        



    </div>
);
}