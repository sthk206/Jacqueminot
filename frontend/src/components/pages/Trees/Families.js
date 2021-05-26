import React, {useEffect, useState} from 'react';
import NavBar from "../../misc/NavBar.js";
import HomeNavBar from "../../misc/HomeNavBar.js";
import Button from "react-bootstrap/Button";
import {useHistory} from 'react-router-dom';
import { authenticate } from '../../auth/auth.js'
export default function Families() {
    const history = useHistory();
    const redirectOG = () => history.push('/og');
    const redirectTNA = () => history.push('/tna');
    const redirectDisney = () => history.push('/disney');
    const redirectOranges = () => history.push('/oranges');

    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        let token = localStorage.getItem('token');
        authenticate(token, history);
        return () => window.removeEventListener('resize', updateSize);
    }, []);


return (
    <div className="home-container">
        {size < 895? <HomeNavBar/> : <NavBar/>}

        <div className="family-box">
            <Button onClick={redirectOG} variant="dark" className="family-button">                
                <p><b>OG</b></p>
            </Button>
            <Button onClick={redirectTNA} variant="dark" className="family-button">
                <p><b>TNA</b></p>
            </Button>
            <Button onClick={redirectOranges} variant="dark" className="family-button">
                <p><b>Oranges</b></p>
            </Button>
            <Button onClick={redirectDisney} variant="dark" className="family-button">
                <p><b>Disney</b></p>
            </Button>
        </div>

    </div>
);
}