import React from 'react';

import NavBar from "../../misc/NavBar.js";
import { Document, Page } from 'react-pdf'
import oranges from './oranges.pdf'


export default function Oranges() {
return (

    <div className="home-container">
        <NavBar/>
        <div className="fam" style={{overflow:"scroll"}}>
            <Document 
            file={oranges} 
            options={{workerSrc: "pdf.worker.js"}}  
            // onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1}></Page>
                
            </Document>

        </div>


    </div>
);
}