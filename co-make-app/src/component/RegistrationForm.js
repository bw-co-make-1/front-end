import React, { useState, useEffect, useHistory } from 'react';
//added useHistory to push the page to login
import axiosWithoutAuth  from '../utils/axiousWithoutAuth';

import { connect } from 'react-redux';

import { Register } from '../actions';


import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().required('Name is a required field'),
    first_name: yup.string().required('Name is a required field'),
    last_name: yup.string().required('Name is a required field'),
    // zipCode: yup.number().required().min(5), //not needed.
    email: yup.string().email().required('Must include an email'),
    password: yup.string().required('no password provided'),
    terms: yup.boolean().oneOf([true], 'please agree to terms of use')
})

const history = useHistory;

const RegistrationForm = props =>{
    const [post, setPost] = useState([]);


    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        is_admin: false
    });


    const [users, setUsers] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        is_admin: false
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
       

    const submitForm = event => {
        event.preventDefault();
        axiosWithoutAuth()
        .post("/Register", users) //changed API call to match
        .then(res => {
         
          setPost(res.data);
          console.log("successful API POST!", res.data);
  
          setUsers({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        is_admin: false
          });
          console.log("users data within regestration", users);
          history.push("/login");

        })
        .catch(err =>{
            console.log(err.res);
        });
          
    };
   

  
 return (
    <form onSubmit={submitForm} 
    // style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin:'20px'}}
    
    >
         <label htmlFor="username" 
        // style={{margin:'20px'}}
        >
        <input
            id="username"
            type="text"
            placeholder="Enter Username"
            onChange={handleChanges}
            value={users.username}
            name="username"
        />
            {errors.username.length > 0 ? (<p className='error'>
            {errors.username}</p>) : null}
        </label>
        <label htmlFor="first_name" 
        // style={{margin:'20px'}}
        >
        <input
            id="first_name"
            type="text"
            placeholder="Enter First Name"
            onChange={handleChanges}
            value={users.first_name}
            name="first_name"
        />
            {errors.first_name.length > 0 ? <p className='error'>
            {errors.first_name} </p> : null}
        </label>
        <label htmlFor="last_name" 
        // style={{margin:'20px'}}
        >
        <input
            id="last_name"
            type="text"
            placeholder="Enter Last Name"
            onChange={handleChanges}
            value={users.last_name}
            name="last_name"
        />
            {errors.last_name.length > 0 ? <p className='error'>
            {errors.last_name} </p> : null}
        </label>
        
        <label htmlFor="email" 
        // style={{margin:'20px'}}
        >
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

        <label htmlFor="password" 
        // style={{margin:'20px'}}
        
        >
        <input
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleChanges}
            value={users.password}
            name="password"
        />
            {errors.password.length > 0 ? (<p className='error'>
            {errors.password}</p>) : null}
        </label>
        {/* <label htmlFor='terms' className='terms' 
        // style={{margin:'20px'}}
        >
            <input
            type='checkbox'
            name='terms'
            checked={users.terms}
            onChange={handleChanges}
            />
            Terms and Conditions
        </label> */}

        <button disabled={buttonDisabled}>Submit Form</button>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>

    );
}
const mapStateToProps = state => {
    return {
      register: state.register
    }
  }

  export default connect(mapStateToProps, {Register} )(RegistrationForm)
// export default RegistrationForm;