import React, {useEffect, useState} from 'react';
import NavBar from "../../misc/NavBar.js";
import filler from "../../../images/rose7.jpeg";
import HomeNavBar from "../../misc/HomeNavBar.js";
import {useHistory, useLocation} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { authenticate, getUser } from '../../auth/auth.js'
const api = process.env.REACT_APP_API_URL;

export default function Profile() {
    const [user, setUser] = useState({});
    // const [layout, setLayout] = useState(this.getLayoutMode());
    const history = useHistory();
    const [pfp, setPfp] = useState(null);

    // const getLayoutMode = ()=>{
    //     return window.innerWidth > 1000 ?
    //         'desktop'
    //         : 'mobile';
    // }

    const [size, setSize] = useState(window.innerWidth);
    useEffect( () => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        let token = localStorage.getItem('token');
        let auth = authenticate(token, history);
        if(auth) {getUser(token)
            .then( res => {
                if(res.pfp){
                    getpfp(res);
                }
                setUser(res);
            });
        };
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const getpfp = async (temp) => {
        let url = encodeURIComponent(temp.pfp)
        fetch(`${api}/fullUser/getUpload/${url}`)
        .then( res => res.blob())
        .then((data) => {
            let imgURL = URL.createObjectURL(data);
            console.log(imgURL);
            setPfp(imgURL);
        })
    }

    const updateBeMentee = async (e) => {
        console.log(e);
        const result = await fetch(`${api}/fullUser/update`, {
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
        const result = await fetch(`${api}/fullUser/update`, {
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
        
        {size < 887? <HomeNavBar/> : <NavBar/>}
        <div className="profile-base center">
            <img width="200px" height="200px" src={pfp ? pfp : filler} alt=""/>
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
                <h5>Looking for Mentee: </h5>
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
                        <td>{user.major !== 'Other' ? user.major : user.other}</td>
                    </tr>
                    <tr>
                        <td><em>Graduation Year:</em></td>
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
                <a href={validateFacebookURL(user.fb) ? user.fb : null} target="_blank" rel="noopener noreferrer">
                    <Button>Facebook</Button>
                </a>

                <a href={validateLinkedInURL(user.linkedin) ? user.linkedin : null} target="_blank" rel="noopener noreferrer">
                    <Button>LinkedIn</Button>
                </a>

                <span onClick={edit}><Button>Edit Profile</Button></span>
            </div>

        </div>
        



    </div>
);
}

function validateFacebookURL(url) {
    if (/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(url))
     return true;
    return false;
}

function createEmailURL(url) {
    const emailLink = "mailto:" + url;
    return emailLink;
}

function validateLinkedInURL(url) {
    if( /(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url) ) {
        return true;
    }
    return false;
}