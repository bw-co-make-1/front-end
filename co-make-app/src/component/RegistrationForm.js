import React, { useState, useEffect, useHistory } from 'react';
//added useHistory to push the page to login

import * as yup from 'yup';
// import axios from 'axios'

import axiosWithAuth from "../utils/axiosWithAuth";

const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    zipCode: yup.number().required().min(5),
    email: yup.string().email().required('Must include an email'),
    password: yup.string().required('no password provided'),
    terms: yup.boolean().oneOf([true], 'please agree to terms of use')
})

const history = useHistory;

const RegistrationForm = props =>{
    const [post, setPost] = useState([]);


    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        zipCode: '',
        terms: ''
    });


    const [users, setUsers] = useState({
        name: '',
        email: '',
        zipCode: '',
        password: '',
        terms: false
    });


    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(users).then(valid => {
            setButtonDisabled(!valid)
        });
    }, [users])

    const validateChange = event => {
        yup.reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setErrors({
                ...errors, [event.target.name]: ''
            });
        })
        .catch(err => {
            setErrors({
                ...errors, [event.target.name] : err.errors[0]
            })
        })
    };
   
    const handleChanges = e => {
        e.persist();
        const newFormData = {
            ...users, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }
        validateChange(e);
        setUsers(newFormData);
    };
   
    // login = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //       .post("/api/auth/register", this.state.credentials)
    //       .then(res => {
    //         localStorage.setItem("token", res.data.payload);
    //         this.props.history.push("/protected");
    //         console.log(res);
    //       })
    //       .catch(err =>
    //         console.error("mm: Login.js: login: err.message: ", err.message)
    //       );
    //   };
    // Added for future modification. This will be picked apart.

    const submitForm = event => {
        event.preventDefault();
        axiosWithAuth()
        .post("/auth/register", users) //changed API call to match
        .then(res => {
         
          setPost(res.data);
          console.log("successful API POST!", res);
  
          
          setUsers({
            name: "",
            email: "",
            password: '',
            terms: true
          });
          localStorage.setItem("token", res.data.payload); //might not be needed.
          history.push("/login");

        })
        .catch(err =>{
            console.log(err.res);
        });
          
    };
   

  
 return (
    <form onSubmit={submitForm} style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin:'20px'}}>
        
        <label htmlFor="name" style={{margin:'20px'}}>
        <input
            id="name"
            type="text"
            placeholder="Enter First and Last Name"
            onChange={handleChanges}
            value={users.name}
            name="name"
        />
            {errors.name.length > 0 ? <p className='error'>
            {errors.name} </p> : null}
        </label>
        <label htmlFor="zipCode" style={{margin:'20px'}}>
        <input
            
            id="zipCode"
            type="number"
            placeholder="Enter Zip Code"
            onChange={handleChanges}
            value={users.zipCode}
            name="zipCode"
        />
            {errors.zipCode.length > 0 ? <p className='error'>
            {errors.zipCode} </p> : null}
        </label>
        <label htmlFor="email" style={{margin:'20px'}}>
        <input
            id="email"
            type="text"
            placeholder="Enter Email Address"
            onChange={handleChanges}
            value={users.email}
            name="email"
        />
            {errors.email.length > 0 ? (<p className='error'>
            {errors.email}</p>) : null}
        </label>

        <label htmlFor="password" style={{margin:'20px'}}>
        <input
            id="password"
            type="text"
            placeholder="Enter Password"
            onChange={handleChanges}
            value={users.password}
            name="password"
        />
            {errors.password.length > 0 ? (<p className='error'>
            {errors.password}</p>) : null}
        </label>
        <label htmlFor='terms' className='terms' style={{margin:'20px'}}>
            <input
            type='checkbox'
            name='terms'
            checked={users.terms}
            onChange={handleChanges}
            />
            Terms and Conditions
        </label>

        <button disabled={buttonDisabled}>Submit Form</button>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>

    );
}

export default RegistrationForm;