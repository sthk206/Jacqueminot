import React, {useEffect, useState} from 'react'
import NavBar from "../../misc/NavBar.js";
import Button from "react-bootstrap/Button";
import {useHistory, useLocation} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form, Toast } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { authenticate, getUser } from '../../auth/auth.js';
const api = process.env.REACT_APP_API_URL;


export default function EditProfile() {
    const [user, setUser] = useState({});
    const history = useHistory();
    const loc = useLocation();
    const redirectProfile = () => history.push('/profile');
    const [validated, setValidated] = useState(false);

   
    useEffect( () => {
        let token = localStorage.getItem('token'); 
        let auth = authenticate(token, history);
        if(auth) {getUser(token).then(res => {setUser(res)});}
    }, []);

    const update = async (data) => {
        data.preventDefault();

        const form = data.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            data.stopPropagation();
            return;
        }

        console.log(data);

        let count = -1;
        let body = new FormData();
        body.append('token', localStorage.getItem('token'));
        body.append('first', data.target[++count].value);
        body.append('last', data.target[++count].value);
        body.append('clss', data.target[++count].value);
        body.append('fam', data.target[++count].value);
        body.append('major', data.target[++count].value);
        body.append('other', data.target[++count].value);
        body.append('year', data.target[++count].value);
        body.append('occupation', data.target[++count].value);
        body.append('org', data.target[++count].value);
        body.append('additional', data.target[++count].value);
        body.append('fb', data.target[++count].value);
        body.append('linkedin', data.target[++count].value);
        body.append('pfp', data.target[++count].files[0]);
        body.append('password', data.target[++count].value); 

        // body.set('major', body.major ===  'other' ?  body.other : body.major);
        // Display the key/value pairs
        
        for(var pair of body.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
        }

        const result = await fetch(`${api}/fullUser/update`, {
          method: 'POST',
          body: body
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
        <Form noValidate validated={validated} className="register2-form" onSubmit={(update)}>
            <Form.Row>
                    <Form.Group as={Col} controlId="register-first">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control required type="text" placeholder="Enter First Name" defaultValue={user.first}/>
                        <Form.Control.Feedback type="invalid">Please enter a first name</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="register-last">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Last Name"  defaultValue={user.last} />
                            <Form.Control.Feedback type="invalid">Please enter a last name</Form.Control.Feedback>
                    </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="register2-class">
                    <Form.Label>CLASS</Form.Label>
                    <Form.Control required as="select">
                        <option>{user.clss}</option>
                        <option>Charter</option>
                        <option>Alpha</option>
                        <option>Beta</option>
                        <option>Gamma</option>
                        <option>Delta</option>
                        <option>Epsilon</option>
                        <option>Zeta</option>
                        <option>Eta</option>
                        <option>Theta</option>
                        <option>Iota</option>
                        <option>Kappa</option>
                        <option>Lambda</option>
                        <option>Mu</option>
                        <option>Nu</option>
                        <option>Xi</option>
                        <option>Omicron</option>
                        <option>Pi</option>
                        <option>Rho</option>
                        <option>Sigma</option>
                        <option>Tau</option>
                        <option>Upsilon</option>
                        <option>Phi</option>
                        <option>Chi</option>
                        <option>Psi</option>
                    </Form.Control>
                </Form.Group>
                

                <Form.Group as={Col} controlId="register2-family">
                    <Form.Label>FAMILY</Form.Label>
                    <Form.Control required as="select"> 
                        <option>{user.fam}</option>
                        <option>OG</option>
                        <option>Disney</option>
                        <option>Oranges</option>
                        <option>TNA</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>


            <Form.Row>
                <Form.Group as={Col} controlId="register2-major">
                        <Form.Label>MAJOR</Form.Label>
                        <Form.Control required as="select">
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
                            <option>Other</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">Please select a major</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="register2-othermajor">
                    <Form.Label>OTHER (if applicable)</Form.Label>
                    <Form.Control type="text" placeholder="Enter Major" defaultValue={user.other}/>
                </Form.Group>
                
                {/* <Form.Group as={Col} controlId="register2-year">
                    <Form.Label>YEAR</Form.Label>
                    <Form.Control {...register("year")} type="year" placeholder="Enter Graduation Year" defaultValue={user.year} />
                </Form.Group> */}
            </Form.Row>

            <Form.Group controlId="register2-year">
                    <Form.Label>YEAR</Form.Label>
                    <Form.Control required type="year" placeholder="Enter Graduation Year" defaultValue={user.year} />
                    <Form.Control.Feedback type="invalid">Please enter a year</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="register2-occupation">
                <Form.Label>CURRENT OCCUPATION</Form.Label>
                <Form.Control required type="text" placeholder="Student, Product Management, UI/UX Design, etc." defaultValue={user.occupation} />
                <Form.Control.Feedback type="invalid">Please enter an occupation</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="register2-organization">
                <Form.Label>ORGANIZATION</Form.Label>
                <Form.Control required type="text" placeholder="UC San Diego, Amazon, Google, etc." defaultValue={user.org}/>
                <Form.Control.Feedback type="invalid">Please enter an organization</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="register2-info">
                <Form.Label>ADDITIONAL INFO</Form.Label>
                <Form.Control required as="textarea" rows={4} placeholder="Please tell us more about yourself!" defaultValue={user.additional} /> 
                <Form.Control.Feedback type="invalid">Please tell us more</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="register2-facebook">
                <Form.Label>FACEBOOK PROFILE</Form.Label>
                <Form.Control type="text" placeholder="https://www.facebook.com/xxxxxxx" defaultValue={user.fb}/>
                <Form.Control.Feedback type="invalid">Please enter a link to your Facebook profile</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="register2-linkedin">
                <Form.Label>LINKEDIN LINK</Form.Label>
                <Form.Control required type="text" placeholder="https://www.linkedin.com/xxxxxxx" defaultValue={user.linkedin}/>
                <Form.Control.Feedback type="invalid">Please enter a link to your LinkedIn profile</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="register2-pfp">
                <Form.Label>UPLOAD PROFILE PICTURE</Form.Label>
                <Form.File id="custom" label="wow" custom/>
            </Form.Group>

            <Form.Group controlId="register2-linkedin">
                <Form.Label>CHANGE PASSWORD</Form.Label>
                <Form.Control minlength={6} type="password" style={{color:'black'}} label="wow" type="text" placeholder="Password"/>
            </Form.Group>




            <div className="form-buttons">
                <Button variant="outline-dark" type='submit'>
                    Update
                </Button>
                <Button style={{width:'100%', margin:0}} variant="outline-dark" onClick={redirectProfile}>
                    Back
                </Button>
            </div>

        </Form>

{/* 
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="register2-pfp">
                <Form.Label>UPLOAD PROFILE PICTURE</Form.Label>
                <Form.File {...register("picture")} id="custom-file" label="Custom file input" custom/>
            </Form.Group>
            <Button variant="outline-dark" type='submit'>
                Update
            </Button>

        </Form> */}
    </div>
);
}

