import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios'

const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    zipCode: yup.number().required().min(5),
    email: yup.string().email().required('Must include an email'),
    password: yup.string().required('no password provided')
})

const RegistrationForm = props =>{
    const [post, setPost] = useState([]);


    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        zipCode: ''
    });


    const [users, setUsers] = useState({
        name: '',
        email: '',
        zipCode: '',
        password: ''
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
        axios.post("https://reqres.in/api/users", users)
        .then(res => {
         
          setPost(res.data);
          console.log("successful API POST!", res);
  
          
          setUsers({
            name: "",
            email: "",
            password: ''
          });
        })
        .catch(err =>{
            console.log(err.res);
        });
    };
   

  
 return (
    <form onSubmit={submitForm} 
    // style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin:'20px'}}
    
    >
        
        <label htmlFor="name" 
        // style={{margin:'20px'}}
        >
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
        <label htmlFor="zipCode" 
        // style={{margin:'20px'}}
        >
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
            type="text"
            placeholder="Enter Password"
            onChange={handleChanges}
            value={users.password}
            name="password"
        />
            {errors.password.length > 0 ? (<p className='error'>
            {errors.password}</p>) : null}
        </label>
        

        <button disabled={buttonDisabled}>Submit Form</button>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>

    );
}

export default RegistrationForm;