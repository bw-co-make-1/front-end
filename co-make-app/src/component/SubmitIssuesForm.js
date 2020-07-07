import React, { useState, useEffect, useHistory } from "react";
import * as yup from "yup";
import { connect } from 'react-redux';
import { AddPosts } from '../actions';
// import {useHistory} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth.js';

const token = localStorage.getItem("token");

const history = useHistory;
const Form = () => {
  const initialFormState = {
    
    
    city: "",
    state: "",
    zip_code: "",
    issue: "",
    description: ""
  };

  const [post, setPost] = useState([]);

  const [serverError, setServerError] = useState("");

  const [formState, setFormState] = useState(initialFormState);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState(initialFormState);

  const formSchema = yup.object().shape({
    
      city: yup.string().required("City is a required field"),
      state: yup.string().required("State is a required field"),
      zip_code: yup.number().required().min(5),
      issue: yup.string().required("Must outline an issue"),
      description: yup.string().required("Must describe issue in detail")
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
    formSchema
    .isValid(formState)
    .then(valid => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState, formSchema]);

  const submitForm = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("Issue", formState)
      .then(response => {
        setPost(response.data);

        setFormState({
          
          
          city: "",
          state: "",
          zip_code: "",
          issue: "",
          description: "",
          photo: ""
        });

        // setServerError(null);
        history.push('/Dashboard')
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
        <textarea
          name="issue"
          placeholder="ex. Sidewalk needs maintenence"
          onChange={inputChange}
          value={formState.issue}
        />
        {errors.state.length > 0 ? (
          <p className="error">{errors.state}</p>
        ) : null}
      </label>
      <label htmlFor="description">
        Please desribe the issue and it's location. 
        <textarea
          name="description"
          placeholder="ex. Sidewalk has a huge crack due to a tree root near the corner of Spring Street and Mcdowell Road."
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
          placeholder="Enter city"
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
          id="state"
          type="text"
          name="state"
          placeholder="Enter State"
          onChange={inputChange}
          value={formState.state}
        />
        </label>
        <label htmlFor="zip_code">
        Zipcode
        <input
          id="zip_code"
          type="number"
          name="zip_code"
          placeholder="Enter Zip Code"
          onChange={inputChange}
          value={formState.zip_code}
        />
        {errors.zip_code.length > 0 ? <p className='error'>
            {errors.zip_code} </p> : null}
        </label>
      

      

      
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={isButtonDisabled} type="submit">
        Submit
      </button>
    </form>

  );
}


export default Form;