import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth';


const initialIssue = {
  "city": "",
        "state": "",
        "zip_code": "",
        "issue": "",
        "description": "",
        "photo": null,
        "user_id": "admin"
};

var axios = require('axios');
var request = require("request");




const IssueUpdate = props => {
  const [post, setPost] = useState(initialIssue);
  const { id } = useParams();
  const { push } = useHistory();
  var data = post;

  var idconfig = {
    method: 'get',
    url: `https://co-make1.herokuapp.com/api/Issue/${id}`,
    headers: { 
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5Mzg0MjY2MywiZXhwIjoxNTk0NzA2NjYzfQ.XUoHq1AoHbOuHFeefnKqNvjbBMHrTQZEC4M0GgjJG3M'
    }
  };

//   axios(putconfig)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



  useEffect(() => {
    // gather the info for the item with id
    axios(idconfig)
      
      .then(res => {
          console.log("WORK", res.data)
          setPost(res.data)
      console.log("update post: ", post)})
      .catch(err =>
        console.error(
          "Upateform.js: useEffect: err: ",
          err.message,
          err.response
        )
      );
  }, [id]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    

    setPost({
      ...post,
      [ev.target.name]: value,
      
    });
    console.log("changed post: " , post)
  };


  

  const handleSubmit = e => {
      console.log("Updated?: ", post);
      let body = post;
      var putconfig = {
        method: 'PUT',
        url: `https://co-make1.herokuapp.com/api/Issue/${id}`,
        headers: { 
            "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5NDA3NDIyNSwiZXhwIjoxNTk0OTM4MjI1fQ.1-sRQQqLxUgapgOocDnMiOEsFFx8Rx6Pd8OdxAUqtlI',
        },
        data : data
          };
    
    e.preventDefault();
    // make a PUT request to edit the item
    axios(putconfig)
    // axios
    // .put(`https://co-make1.herokuapp.com/api/Issue/${id}`,
    //  body,
    //  {headers: { 
    //     "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5NDA3NDIyNSwiZXhwIjoxNTk0OTM4MjI1fQ.1-sRQQqLxUgapgOocDnMiOEsFFx8Rx6Pd8OdxAUqtlI',
        
      
    // }})
    .then(res => {
     
        setPost(res.data);
        console.log("successful API POST!", res.data);
    })
    
      .then(res => {
     
      const newPostList = props.issues.map(mv => {
        if (mv.id === res.data.id) {
            return res.data
        }
        return mv
    })
   
       push(`/dashboard`)
      
        })

      .catch(err =>
        console.error(
          "UpdateForm.js: handleSubmit: ",
          err.message,
          err.response
        )
      );
    

  };

  return (
    <div>
      <h2>Update Issue</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="issue">
        What's the Issue? 
        <textarea
          name="issue"
          placeholder="ex. Sidewalk needs maintenence"
          onChange={changeHandler}
          value={post.issue}
        />
        
      </label>
      <label htmlFor="description">
        Please desribe the issue and it's location. 
        <textarea
          name="description"
          placeholder="ex. Sidewalk has a huge crack due to a tree root near the corner of Spring Street and Mcdowell Road."
          onChange={changeHandler}
          value={post.description}
        />
        
      </label>
<label htmlFor="city">
        City
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          onChange={changeHandler}
          value={post.city}
        />
        
      </label>
        <label htmlFor="state">
        State
        <input
          id="state"
          type="text"
          name="state"
          placeholder="Enter State"
          onChange={changeHandler}
          value={post.state}
        />
        </label>
        <label htmlFor="zip_code">
        Zipcode
        <input
          id="zip_code"
          type="number"
          name="zip_code"
          placeholder="Enter Zip Code"
          onChange={changeHandler}
          value={post.zip_code}
        />
        
        </label>
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default IssueUpdate;
