import React, { useState} from 'react';
import {withRouter, useHistory} from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";


class SignInForm extends React.Component {
    state = {
        member: {
        username: "",
        password: ""
        }
    }

    handleChange = e => {
        this.setState({ 
            member: {
            ...this.state.member, 
            [e.target.name]: e.target.value 
            }
        });
    };

login = e => {
    e.preventDefault(); //prevents default
    axiosWithAuth() //In utils
      .post("/Login", this.state.member) // API route for login
      .then(res => {
        localStorage.setItem("user", res.data.user);  //user
        localStorage.setItem("token", res.data.token); //Token call
        console.log(res.data);
        console.log("user: ", res.data.user);
        console.log("token actual: ", res.data.token);
        this.props.history.push("/dashboard"); // Push to dashboard. Push to Dashboard works.
        console.log(res); // show response
      })
      .catch(err =>
        console.error("mm: Login.js: login: err.message: ", err.message)
      ); // incase something breaks, it'll say so.
  }; // Base mapping of general call. Will modify to fit.



render(){
    return (
        <form onSubmit={this.login}>
            <input
                onChange={this.handleChange}
                type="text"
                name="username"
                placeholder="User Name"
                value={this.state.member.username}
            />
            <input
                onChange={this.handleChange}
                // type="text" 
                type="password" //Change from type text to password. Allows password to be hidden.
                name="password"
                placeholder="Password"
                value={this.state.member.password}
            />
            <button type="submit">Submit</button>
        </form>
    )
    }
}

export default SignInForm;