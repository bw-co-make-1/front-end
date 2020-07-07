import React, {useState} from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


// axios.defaults.withCredentials = true;

const SignInForm = () => {
   const [credentials, setCredentials] = useState( {
        
        username: "",
        password: ""
        
    })
    const history = useHistory();
    const handleChange = e => {
        setCredentials({ 
            
            ...credentials, 
            [e.target.name]: e.target.value 
            
        });
    };

const login = e => {
    e.preventDefault(); //prevents default
    axiosWithAuth() //In utils
      .post("/Login", credentials) // API route for login
      .then(res => {
        localStorage.setItem("token", res.data.token); //Token call (should return token)
        history.push("/dashboard"); // Push to dashboard. Push to Dashboard works.
        console.log(res); // show response
      })
      .catch(err =>
        console.error("mm: Login.js: login: err.message: ", err.message)
      ); // incase something breaks, it'll say so.
 
}; // Base mapping of general call. Will modify to fit.



    return (
        <form onSubmit={login}>
            <input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="User Name"
                value={credentials.username}
            />
            <input
                onChange={handleChange}
                // type="text" 
                type="password" //Change from type text to password. Allows password to be hidden.
                name="password"
                placeholder="Password"
                value={credentials.password}
            />
            <button type="submit" >Submit</button>
        </form>
    )
    }

export default SignInForm;