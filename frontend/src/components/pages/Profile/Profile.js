import React, {useEffect, useState} from 'react';
import NavBar from "../../misc/NavBar.js";
import filler from "../../../images/filler.png"

import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const jwt = require('jsonwebtoken')

const JWT_SECRET = 'lkjsdfku4@#$@#o7w59 pajfclvkas%$#ur3daFDUA'

export default function Profile() {
    const [user, setUser] = useState({});

    //get user data function
    const getUserdata = async () => {

        const tempUser = jwt.verify(localStorage.getItem('token'), JWT_SECRET);
        
        const result = await fetch(`http://localhost:5000/fullUser/${tempUser.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then( res => res.json() );

        console.log(result);
        setUser(result);
      
    }


    useEffect(() => {
        getUserdata();
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

return (
    <div className="grid-container">
        <NavBar/>

        <div className="profile-base center">
            <img width="200px" height="200px" src={filler} alt=""/>
            <div className="grid center">
                <h1>{user.name}</h1>
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

            <h2>About | <a href="/editprofile">edit</a></h2>
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
                {user.description}
            </p>

        </div>
        <div className="profile-links">
            <a href={user.fb} target="_blank" rel="noopener noreferrer">
                <Button type='submit'>Facebook</Button>
            </a>

            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                <Button type='submit'>LinkedIn</Button>
            </a>
        </div>



    </div>
);
}