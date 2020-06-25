import React, { useState, useEffect } from "react";
import * as yup from "yup"; 
import axios from "axios";

export default function Form() {
  const initialFormState = {
    name: "",
    email: "",
    city: "",
    state: "",
    zipCode: "",
    issue: "",
    description: "",
    // photo: "",
    terms: ""
  };

  const [post, setPost] = useState([]);

  const [serverError, setServerError] = useState("");

  const [formState, setFormState] = useState(initialFormState);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState(initialFormState);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup
      .string()
      .email("must be a valid email address")
      .required(),
      city: yup.string().required("City is a required field"),
      state: yup.string().required("State is a required field"),
      zipCode: yup.number().required().min(5),
      terms: yup.boolean().oneOf([true], "please agree with us"),
      issue: yup.string().required("Must outline an issue"),
      description: yup.string().required("Must describe issue in detail"),
      terms: yup.boolean().oneOf([true], 'please agree to terms of use')
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

    axios
      .post("h", formState)
      .then(response => {
        setPost(response.data);

        setFormState({
          name: "",
          email: "",
          city: "",
          state: "",
          zipCode: "",
          issue: "",
          description: "",
          photo: "",
          terms: ""
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
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter First and Last Name"
          onChange={inputChange}
          value={formState.name}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          placeholder="Enter Email Address"
          onChange={inputChange}
          value={formState.email}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>
      <label htmlFor="city">
        City
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Enter City"
          onChange={inputChange}
          value={formState.city}
        />
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
        <label htmlFor="zipCode">
        Zipcode
        <input
          id="zipCode"
          type="number"
          name="zipCode"
          placeholder="Enter Zip Code"
          onChange={inputChange}
          value={formState.zipcode}
        />
        {errors.zipCode.length > 0 ? <p className='error'>
            {errors.zipCode} </p> : null}
        </label>
      <label htmlFor="issue">
        What's the Issue? 
        <textarea
          name="issue"
          placeholder="ex. Sidewalk needs maintenence"
          onChange={inputChange}
          value={formState.issue}
        />
        {errors.issue.length > 0 ? (
          <p className="error">{errors.issue}</p>
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

      <label htmlFor="terms" className="terms">
        <input
          type="checkbox"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Conditions
        {/* {errors.terms.length > 0 ? (
          <p className="error">{errors.terms}</p>
        ) : null} */}
      </label>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={isButtonDisabled} type="submit">
        Submit
      </button>
    </form>

  );
}
