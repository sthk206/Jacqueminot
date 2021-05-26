import React, {useEffect, useState} from 'react'
import NavBar from "../../misc/NavBar.js";
import HomeNavBar from "../../misc/HomeNavBar.js";
import filler from "../../../images/filler.png"
import Button from "react-bootstrap/Button"
import {useHistory, useLocation} from 'react-router-dom';
import { authenticate, getUser } from '../../auth/auth.js';
const api = process.env.REACT_APP_API_URL;

export default function Messages() {
    const [brothers, setBrothers] = useState([]);
    const [id, setId] = useState("");
    const history = useHistory();

    const findBrothers = async (id) => {

        const result = await fetch(`${api}/fullUser/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then( res => res.json() );
      
        console.log(result);
        setId(id);
        setBrothers(result);
    }

    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        let token = localStorage.getItem('token');
        let auth = authenticate(token, history);
        if(auth) {getUser(token).then(res => {findBrothers(res._id)});}
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    const createBrother = (brother) => (
        <div className="messages-placard">
            <img width="150px" height="150px" src={brother.pfp ? `${api}/${brother.pfp}` : filler} alt=""/>
            <div className="messages-div">
                <h1>Brother {brother.first} {brother.last}</h1>
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
                {/* <a href={brother.fb} target="_blank" rel="noopener noreferrer">
                    <Button variant="dark" className="messages-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="home-svg" viewBox="0 0 16 16">
                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                        </svg>
                        <p> 
                            {
                                
                            // validateFbURL(brother.fb) ? "Facebook" : "Not" 
                            validateLIUrl(brother.linkedin) ? "linkedin" : "not"
                            }
                        </p>
                    </Button>
                </a> */}
                <a href={validateFacebookURL(brother.fb) ? brother.fb : createEmailURL(brother.username)} target="_blank" rel="noopener noreferrer">
                    <Button variant="dark" className="messages-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="home-svg" viewBox="0 0 16 16">
                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                        </svg>
                        <p> 
                            { validateFacebookURL(brother.fb) ? "Facebook" : "Email"  }
                        </p>
                    </Button>
                </a>
            </div>
        </div>     
    );

// function validURL(str) {
//     var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//         '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//     return !!pattern.test(str);
//     }

function validateFacebookURL(url) {
    if (/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(url))
     return true;
    return false;
}

function createEmailURL(url) {
    const emailLink = "mailto:" + url;
    return emailLink;
}


// function validateLIUrl(url) {
//     if( /(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url) ) {
//         return true;
//     }
//     return false;
// }



return (
    <div className="messages-wrapper">
        {size < 895? <HomeNavBar/> : <NavBar/>}
        <h1 className="messages-title">Brothers of Theta Tau</h1>
        <div className="message-container">

            {brothers.map((brother) => brother._id !== id ? createBrother(brother) : null )}

        </div>
    </div>
);
}