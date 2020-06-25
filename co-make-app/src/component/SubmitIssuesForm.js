import React, { useState, useEffect } from "react";
import * as yup from "yup"; // DOCS: https://github.com/jquense/yup
import axios from "axios";

import { connect } from 'react-redux';

import { AddPosts } from '../actions';

import axiosWithAuth from '../utils/axiosWithAuth';


const Form = () => {
  const initialFormState = {
    issue: "",
    description: "",
    photo:"",
    city: "",
    state: "",
    zip_code: "",
  };

  const [post, setPost] = useState([]);

  const [serverError, setServerError] = useState("");

  const [formState, setFormState] = useState(initialFormState);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState(initialFormState);

  const formSchema = yup.object().shape({
    issue: yup.string().required("Can't fix something we don't know about. Please enter a name of the Issue."),
    description: yup
      .string()
      .email("Must contain at least some information")
      .required(),
    photo: yup.string().required("Post a link for a picture"),
    city: yup.string().required("What city is the Issue in?"),
    state: yup.string().required("What state is the Issue in?"),
    zip_code: yup.string().required("What part of the city is the Issue in?")
  });

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name) 
      .validate(e.target.value) 
      .then(valid => {
         setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch(err => {
        console.log("error!", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const submitForm = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/Issue", formState)
      .then(response => {
        setPost(response.data);

        setFormState({
          issue: "",
          description: "",
          photo:"",
          city: "",
          state: "",
          zip_code: "",
        });

        setServerError(null);
      })
      .catch(err => {
        setServerError("oops! something happened!");
      });
  };

  // onChange function
  const inputChange = e => {
    e.persist(); 
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    }; 
    validateChange(e); 
    setFormState(newFormData); 
  };

  return (
    <form onSubmit={submitForm}>
      {serverError ? <p className="error">{serverError}</p> : null}
      <label htmlFor="issue">
        What's the Issue?
        <input
          id="issue"
          type="text"
          name="issue"
          placeholder="What's the issue?"
          onChange={inputChange}
          value={formState.issue}
        />
        {errors.issue.length > 0 ? <p className="error">{errors.issue}</p> : null}
      </label>
      
      <label htmlFor="description">
        Please describe the issue, its current location and how you'd like to see it addressed. 
        <textarea
          name="issue"
          onChange={inputChange}
          value={formState.description}
        />
        {errors.description.length > 0 ? (
          <p className="error">{errors.description}</p>
        ) : null}
      </label>
<label htmlFor="city">
        City
        <input
          type="text"
          name="city"
          onChange={inputChange}
          value={formState.city}
        />
        {errors.city.length > 0 ? (
          <p className="error">{errors.city}</p>
        ) : null}
      </label>
      <label htmlFor="state">
        State
        <input
          type="text"
          name="state"
          onChange={inputChange}
          value={formState.state}
        />
        {errors.state.length > 0 ? (
          <p className="error">{errors.state}</p>
        ) : null}
      </label>
      <label htmlFor="zip_code">
        Zipcode
        <input
          type="text"
          name="zip_code"
          onChange={inputChange}
          value={formState.zip_code}
        />
        {errors.zip_code.length > 0 ? (
          <p className="error">{errors.zip_code}</p>
        ) : null}
      </label>
      {/* <label htmlFor="terms" className="terms">
        <input
          type="checkbox"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Conditions
        {errors.terms.length > 0 ? (
          <p className="error">{errors.terms}</p>
        ) : null}
      </label> */}
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={isButtonDisabled} type="submit">
        Submit
      </button>
    </form>
  );
}
const mapStateToProps = state => {
  return {
    issue: state.issue
  }
}

export default connect(mapStateToProps, {AddPosts} )(Form)