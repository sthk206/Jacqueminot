import React, {useEffect, useState} from 'react'
import NavBar from "../../misc/NavBar.js";
import filler from "../../../images/filler.png"
import Button from "react-bootstrap/Button"
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'lkjsdfku4@#$@#o7w59 pajfclvkas%$#ur3daFDUA'

export default function Messages() {
    const [brothers, setBrothers] = useState([]);

    const findBrothers = async () => {
      
        const tempUser = jwt.verify(localStorage.getItem('token'), JWT_SECRET);
        console.log(tempUser)

        const result = await fetch(`http://localhost:5000/fullUser/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then( res => res.json() );
      
        console.log(result);
        setBrothers(result);
      
    }

    useEffect(() => {
        findBrothers();
    }, [])

return (
    <div className="messages-wrapper">
        <NavBar/>
        <h1 className="messages-title">Brothers of Theta Tau</h1>
        <div className="message-container">

        {brothers.map((brother) => (
            <div className="messages-placard">
                <img width="150px" height="150px" src={filler} alt=""/>
                <div className="messages-div">
                <h1>Brother {brother.name}</h1>
                    <table cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td><em>Class:</em></td>
                                <td>{brother.clss}</td>
                            </tr>
                            <tr>
                                <td><em>Major:</em></td>
                                <td>{brother.major}</td>
                            </tr>
                            <tr>
                                <td><em>Occupation:</em></td>
                                <td>{brother.occupation}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href={brother.fb} target="_blank" rel="noopener noreferrer">
                        <Button variant="dark" className="messages-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="home-svg" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                            </svg>
                            <p>Message</p>
                        </Button>
                    </a>
                </div>
            </div>     
        ))};

        </div>
    </div>
);
}