import React from 'react';

import NavBar from "../../misc/NavBar.js";
import HomeNavBar from "../../misc/HomeNavBar.js";
import { Document, Page } from 'react-pdf'
import oranges from './oranges.pdf'
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { authenticate } from '../../auth/auth.js'


export default function Oranges() {

    const history = useHistory();

    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        let token = localStorage.getItem('token');
        authenticate(token, history);
        return () => window.removeEventListener('resize', updateSize);
    }, [])
    
return (

    <div className="home-container">
        {size < 895? <HomeNavBar/> : <NavBar/>}
        <div className="fam" style={{overflow:"visible"}}>
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