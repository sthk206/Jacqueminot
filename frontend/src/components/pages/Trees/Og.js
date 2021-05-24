import React from 'react';

import NavBar from "../../misc/NavBar.js";
import { Document, Page } from 'react-pdf'
import og from './og.pdf'


export default function Og() {
return (

    <div className="home-container">
        <NavBar/>
        <div className="fam" style={{overflow:"scroll"}}>
            <Document 
            file={og} 
            options={{workerSrc: "pdf.worker.js"}}  
            // onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1}></Page>
                
            </Document>

        </div>


    </div>
);
}