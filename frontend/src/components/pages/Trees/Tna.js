import React from 'react';

import NavBar from "../../misc/NavBar.js";
import { Document, Page } from 'react-pdf'
import tna from './tna.pdf'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { authenticate } from '../../auth/auth.js'

export default function Tna() {

    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem('token');
        authenticate(token, history);
    }, [])



return (

    <div className="home-container">
        <NavBar/>
        <div className="fam" style={{overflow:"scroll"}}>
            <Document 
            file={tna} 
            options={{workerSrc: "pdf.worker.js"}}  
            // onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1}></Page>
                
            </Document>

        </div>


    </div>
);
}