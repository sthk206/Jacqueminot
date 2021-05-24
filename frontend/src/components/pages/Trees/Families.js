import React from 'react';
import NavBar from "../../misc/NavBar.js";
import Button from "react-bootstrap/Button";
import {useHistory} from 'react-router-dom';
export default function Families() {
    const history = useHistory();
    const redirectOG = () => history.push('/og');
    const redirectTNA = () => history.push('/tna');
    const redirectDisney = () => history.push('/disney');
    const redirectOranges = () => history.push('/oranges');
return (
    <div className="home-container">
        <NavBar/>

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