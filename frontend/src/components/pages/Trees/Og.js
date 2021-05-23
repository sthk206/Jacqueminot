import React from 'react';

import NavBar from "../../misc/NavBar.js";
import { Document, Page } from 'react-pdf'
import samplePdf from './c.pdf'


export default function Og() {
return (

    <div className="home-container">
        <NavBar/>
        <h1>Mentees</h1>
        <div style={{overflow:"scroll", width:"100%"}}>
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