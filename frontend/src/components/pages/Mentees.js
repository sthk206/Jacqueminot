import React from 'react';
import rose from "../../images/rose7.jpeg";
import mentor from "../../images/mentor.svg";
import user from "../../images/user.svg";
import tree from "../../images/tree.svg";
import chat from "../../images/chat.svg";
import Button from "react-bootstrap/Button";
import NavBar from "../misc/NavBar.js";
import { Document, Page } from 'react-pdf'
import samplePdf from './c.pdf'


export default function Mentees() {
return (
    // <div className="background">
    //     <h1>sdfjdslkf</h1>
    //             {/* <div class="circle">
    //             </div> */}
    //     <div className="container">
    //         <img height="70" width="70" src={rose} alt=""/>
    //         <h1 className="title">Jacqueminot</h1>
    //     </div>
    //     <div className="container">
    //         <Button className="homepage-button">Profile</Button>
    //         <Button className="homepage-button">Mentorship</Button>
    //         <Button className="homepage-button">Family Trees</Button>
    //         <Button className="homepage-button">Chat</Button>
    //     </div>
    // </div>
    <div className="home-container">
        <NavBar/>
        <h1>Mentees</h1>
        <div style={{overflow: "scroll"}}>
            <Document 
            file={samplePdf} 
            options={{workerSrc: "pdf.worker.js"}}  
            // onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1}></Page>
                
            </Document>

        </div>


    </div>
);
}