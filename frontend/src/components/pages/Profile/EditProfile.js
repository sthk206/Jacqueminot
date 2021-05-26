import React, {useEffect, useState} from 'react'
import NavBar from "../../misc/NavBar.js";
import Button from "react-bootstrap/Button";
import {useHistory, useLocation} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { authenticate, getUser } from '../../auth/auth.js';
const api = process.env.REACT_APP_API_URL;

export default function EditProfile() {
    const [user, setUser] = useState({});
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const loc = useLocation();
    const redirectProfile = () => history.push('/profile');
   
    useEffect( () => {
        let token = localStorage.getItem('token'); 
        let auth = authenticate(token, history);
        if(auth) {getUser(token).then(res => {setUser(res)});}
    }, []);

    const update = async (data) => {
        console.log(data);
        let body = new FormData();
        body.append('token', localStorage.getItem('token'));
        body.append('first', data.first);
        body.append('last', data.last);
        body.append('clss', data.clss);
        body.append('fam', data.fam);
        body.append('major', data.major);
        body.append('year', data.year);
        body.append('occupation', data.occupation);
        body.append('org', data.org);
        body.append('additional', data.additional);
        body.append('fb', data.fb);
        body.append('linkedin', data.linkedin);
        body.append('pfp', data.pfp[0]);
        body.append('password', data.cp); 
      
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
        <Form className="register2-form" onSubmit={handleSubmit(update)}>
            <Form.Row>
                    <Form.Group as={Col} controlId="register-first">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control {...register("first")} type="text" placeholder="Enter First Name" defaultValue={user.first}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="register-last">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control {...register("last")} type="text" placeholder="Enter Last Name"  defaultValue={user.last} />
                    </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="register2-class">
                    <Form.Label>CLASS</Form.Label>
                    <Form.Control {...register("clss")} as="select" >
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
                        <option>Omnicron</option>
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
                    <Form.Control {...register("fam")} as="select" defaultValue="Select Family..."> 
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
                        <Form.Control {...register("major")} as="select" defaultValue="Select Major...">
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
                </Form.Group>

                <Form.Group as={Col} controlId="register2-year">
                    <Form.Label>YEAR</Form.Label>
                    <Form.Control {...register("year")} type="year" placeholder="Enter Graduation Year" defaultValue={user.year} />
                </Form.Group>
            </Form.Row>


            <Form.Group controlId="register2-occupation">
                <Form.Label>CURRENT OCCUPATION</Form.Label>
                <Form.Control {...register("occupation")} type="text" placeholder="Student, Product Management, UI/UX Design, etc." defaultValue={user.occupation} />
            </Form.Group>
            <Form.Group controlId="register2-org">
                <Form.Label>Organization</Form.Label>
                <Form.Control {...register("org")} type="text" placeholder="UC San Diego, Amazon, Google, etc." defaultValue={user.org}/>
            </Form.Group>

            <Form.Group controlId="register2-info">
                <Form.Label>ADDITIONAL INFO</Form.Label>
                <Form.Control {...register("additional")} as="textarea" rows={4} placeholder="Please tell us more about yourself!" defaultValue={user.additional}/> 
            </Form.Group>

            <Form.Group controlId="register2-facebook">
                <Form.Label>FACEBOOK PROFILE</Form.Label>
                <Form.Control {...register("fb")} type="text" placeholder="https://www.facebook.com/xxxxxxx" defaultValue={user.fb} />
            </Form.Group>
            <Form.Group controlId="register2-linkedin">
                <Form.Label>LINKEDIN LINK</Form.Label>
                <Form.Control {...register("linkedin")} type="text" placeholder="https://www.linkedin.com/xxxxxxx" defaultValue={user.linkedin}/>
            </Form.Group>

            <Form.Group controlId="register2-pfp">
                <Form.Label>UPLOAD PROFILE PICTURE</Form.Label>
                <Form.File {...register("pfp")} id="custom" label="wow" custom/>
            </Form.Group>

            <Form.Group controlId="register2-linkedin">
                <Form.Label>CHANGE PASSWORD</Form.Label>
                <Form.Control {...register("cp")} style={{color:'black'}} label="wow" type="text" placeholder="Password"/>
            </Form.Group>


            <Button variant="outline-dark" type='submit'>
                Update
            </Button>
            <Button variant="outline-dark" onClick={redirectProfile}>
                Back
            </Button>

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

