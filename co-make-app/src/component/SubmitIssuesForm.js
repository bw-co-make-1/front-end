import React, { useState, useEffect } from "react";
import * as yup from "yup"; // DOCS: https://github.com/jquense/yup
import axios from "axios";

export default function Form() {
  const initialFormState = {
    name: "",
    email: "",
    issue: "",
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
    terms: yup.boolean().oneOf([true], "please agree with us"),
    positions: yup.string().required("Must choose a position"),
    motivation: yup.string().required("must say why")
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

    axios
      .post("h", formState)
      .then(response => {
        setPost(response.data);

        setFormState({
          name: "",
          email: "",
          issue: "",
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
          onChange={inputChange}
          value={formState.email}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>
      <label htmlFor="issue">
        Please describe the issue, its current location and how you'd like to see it addressed. 
        <textarea
          name="issue"
          onChange={inputChange}
          value={formState.issue}
        />
        {errors.issue.length > 0 ? (
          <p className="error">{errors.issue}</p>
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
