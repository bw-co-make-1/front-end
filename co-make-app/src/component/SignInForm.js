import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Login } from '../actions';

//import axiosWithAuth from "../utils/axiosWithAuth";

const SignInForm = props => {
    const [member, setMember] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        setMember({ 
            ...member, 
            [event.target.name]: event.target.value 
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.setUser([
            member,
            ...props.member,
        ]);
        resetForm(); //allows auto reset upon submit
    }

// const login = e => {
//     e.preventDefault(); //prevents default
//     axiosWithAuth() //In utils
//       .post("/auth/login", member) // API route for login
//       .then(res => {
//         localStorage.setItem("token", res.data.payload); //Token call
//         this.props.history.push("/protected"); // Push to dashboard. Protected is working name
//         console.log(res); // show response
//       })
//       .catch(err =>
//         console.error("mm:
// Login.js: 
// login: err.message: ", 
// err.message)
//       ); // incase something breaks, it'll say so.
//   }; // Base mapping of general call. Will modify to fit.
// Due to the condition of the API at the moment, this will change.

    const resetForm = (event) => {
        event.preventDefault();
        setMember({
            email: "",
            role: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Email"
                value={member.email}
            />
            <input
                onChange={handleChange}
                // type="text" 
                type="password" //Change from type text to password. Allows password to be hidden.
                name="password"
                placeholder="Password"
                value={member.password}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      register: state.login
    }
  }

  export default connect(mapStateToProps, {Login} )(SignInForm)



// export default SignInForm;