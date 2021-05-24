import React from 'react';

import NavBar from "../../misc/NavBar.js";
import { Document, Page } from 'react-pdf'
import disney from './disney.pdf'


export default function Disney() {
return (

    <div className="home-container">
        <NavBar/>
        <div className="fam" style={{overflow:"scroll"}}>
            <Document 
            file={disney} 
            options={{workerSrc: "pdf.worker.js"}}  
            // onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1}></Page>
                
            </Document>

        </div>


    </div>
);
}