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


return (
    <div className="grid-container">
        <NavBar/>

        <div className="profile-base center">
            <img width="200px" height="200px" src={filler} alt=""/>
            <div className="grid center">
                <h1>{user.name}</h1>
                {/* Job Title */}
                <h6> {user.occupation} at UC San Diego</h6>
            </div>
            <div className="center">
                <h5>Mentor Status: </h5>
                <BootstrapSwitchButton
                    checked={user.mentor}
                    onlabel=' '
                    onstyle='success'
                    offlabel=' '
                    offstyle='danger'
                />
            </div>
            <div className="center">
                <h5>Mentee Status: </h5>
                <BootstrapSwitchButton
                    checked={user.mentee}
                    onlabel=' '
                    onstyle='success'
                    offlabel=' '
                    offstyle='danger'
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
                {user.description}
            </p>

        </div>
        <div className="profile-links">
            <Button>LinkedIn</Button>
            <Button>Facebook</Button>
        </div>



    </div>
);
}