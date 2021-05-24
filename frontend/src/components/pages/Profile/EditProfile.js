import React, {useEffect, useState} from 'react'
import NavBar from "../../misc/NavBar.js";
import Button from "react-bootstrap/Button";
import {useHistory, useLocation} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'lkjsdfku4@#$@#o7w59 pajfclvkas%$#ur3daFDUA'

export default function EditProfile() {
    const [user, setUser] = useState({});
    const history = useHistory();
    const loc = useLocation();
    const redirectProfile = () => history.push('/profile');
    
    useEffect(() => {
        console.log(loc.user);
        setUser(loc.user);
    }, []);

    const update = async (e) => {
        e.preventDefault();
        console.log(e);
      
        
        const first = e.target[0].value;
        const last = e.target[1].value;
        const clss = e.target[2].value;
        const fam = e.target[3].value;
        const major = e.target[4].value;
        const year =  e.target[5].value;
        const occupation =  e.target[6].value;
        const org = e.target[7].value;
        const additional = e.target[8].value;
        const fb =  e.target[9].value;
        const linkedin =  e.target[10].value;
           
      
        const result = await fetch('http://localhost:5000/fullUser/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: localStorage.getItem('token'),
            first, last, clss, fam, major, year, occupation, org, additional, fb, linkedin
          })
        }).then( res => res.json() );
      
        if(result.success){
          history.push('/profile');
        }else {
          alert (result.error);
        }
      };
      

return (
    <div className="home-container">
        <div className="home-box">
            <h1 className="title">Edit Profile</h1>
        </div>
        <Form className="register2-form" onSubmit={update}>
            <Form.Row>
                    <Form.Group as={Col} controlId="register-first">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" defaultValue={user.first}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="register-last">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name"  defaultValue={user.last} />
                    </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="register2-class">
                    <Form.Label>CLASS</Form.Label>
                    <Form.Control as="select" >
                        <option disabled>Select Class...</option>
                        <option selected={user.clss === "Charter"}>Charter</option>
                        <option selected={user.clss === "Alpha"}>Alpha</option>
                        <option selected={user.clss === "Beta"}>Beta</option>
                        <option selected={user.clss === "Gamma"}>Gamma</option>
                        <option selected={user.clss === "Delta"}>Delta</option>
                        <option selected={user.clss === "Epsilon"}>Epsilon</option>
                        <option selected={user.clss === "Zeta"}>Zeta</option>
                        <option selected={user.clss === "Eta"}>Eta</option>
                        <option selected={user.clss === "Theta"}>Theta</option>
                        <option selected={user.clss === "Iota"}>Iota</option>
                        <option selected={user.clss === "Kappa"}>Kappa</option>
                        <option selected={user.clss === "Lambda"}>Lambda</option>
                        <option selected={user.clss === "Mu"}>Mu</option>
                        <option selected={user.clss === "Nu"}>Nu</option>
                        <option selected={user.clss === "Xi"}>Xi</option>
                        <option selected={user.clss === "Omnicron"}>Omnicron</option>
                        <option selected={user.clss === "Pi"}>Pi</option>
                        <option selected={user.clss === "Rho"}>Rho</option>
                        <option selected={user.clss === "Sigma"}>Sigma</option>
                        <option selected={user.clss === "Tau"}>Tau</option>
                        <option selected={user.clss === "Upsilon"}>Upsilon</option>
                        <option selected={user.clss === "Phi"}>Phi</option>
                        <option selected={user.clss === "Chi"}>Chi</option>
                        <option selected={user.clss === "Psi"}>Psi</option>
                    </Form.Control>
                </Form.Group>
                

                <Form.Group as={Col} controlId="register2-family">
                    <Form.Label>FAMILY</Form.Label>
                    <Form.Control as="select" defaultValue="Select Family..."> 
                        <option disabled>Select Family...</option>
                        <option selected={user.fam === "OG"}>OG</option>
                        <option selected={user.fam === "Disney"}>Disney</option>
                        <option selected={user.fam === "Oranges"}>Oranges</option>
                        <option selected={user.fam === "TNA"}>TNA</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>


            <Form.Row>
                <Form.Group as={Col} controlId="register2-major">
                        <Form.Label>MAJOR</Form.Label>
                        <Form.Control as="select" defaultValue="Select Major...">
                            <option >{user.major}</option>
                            <option >Aerospace Engineering</option>
                            <option >Bioengineering</option>
                            <option >Chemical Engineering</option>
                            <option >Computer Science</option>
                            <option >Computer Engineering</option>
                            <option >Electrical Engineering</option>
                            <option >Environmental Engineering</option>
                            <option >Mechanical Engineering</option>
                            <option >Structural Engineering</option>
                            <option >Math-Computer Science</option>
                            <option >Data Science</option>
                            <option>Other (Please manually edit your major in the Edit Profle page)</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="register2-year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="year" placeholder="Enter Graduation Year" defaultValue={user.year} />
                </Form.Group>
            </Form.Row>


            <Form.Group controlId="register2-occupation">
                <Form.Label>CURRENT OCCUPATION</Form.Label>
                <Form.Control type="text" placeholder="Student, Product Management, UI/UX Design, etc." defaultValue={user.occupation} />
            </Form.Group>
            <Form.Group controlId="register2-org">
                <Form.Label>Organization</Form.Label>
                <Form.Control type="text" placeholder="UC San Diego, Amazon, Google, etc." defaultValue={user.org}/>
            </Form.Group>

            <Form.Group controlId="register2-info">
                <Form.Label>ADDITIONAL INFO</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Please tell us more about yourself!" defaultValue={user.additional}/> 
            </Form.Group>

            <Form.Group controlId="register2-facebook">
                <Form.Label>FACEBOOK PROFILE</Form.Label>
                <Form.Control type="text" placeholder="https://www.facebook.com/xxxxxxx" defaultValue={user.fb} />
            </Form.Group>
            <Form.Group controlId="register2-linkedin">
                <Form.Label>LINKEDIN LINK</Form.Label>
                <Form.Control type="text" placeholder="https://www.linkedin.com/xxxxxxx" defaultValue={user.linkedin}/>
            </Form.Group>

            <Button variant="outline-dark" type='submit'>
                Update
            </Button>
            <Button variant="outline-dark" onClick={redirectProfile}>
                Back
            </Button>

        </Form>
    </div>
);
}