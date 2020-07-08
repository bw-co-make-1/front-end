import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import IssueCards from "./IssueCards";
import IssueVotes from './IssueVotes';
import { ContainerDiv, StyledH2 } from './Styles'
import '../App.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5Mzg0MjY2MywiZXhwIjoxNTk0NzA2NjYzfQ.XUoHq1AoHbOuHFeefnKqNvjbBMHrTQZEC4M0GgjJG3M';
var axios = require('axios');



function Issue(props) {
    const { push } = useHistory();
    const [vote, newVotes] = useState();
    const newVote = () => {
    newVotes(vote + 1);
    }
    const [issue, setIssue] = useState();
    const [post, setPost] = useState();
    const [issue_id, setIssue_id] = useState();
    console.log("props: ", props);
    const params = useParams();

    var config = {
        method: 'get',
        url: `https://co-make1.herokuapp.com/api/Issue/${props.id}`,
        headers: { 
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5Mzg0MjY2MywiZXhwIjoxNTk0NzA2NjYzfQ.XUoHq1AoHbOuHFeefnKqNvjbBMHrTQZEC4M0GgjJG3M'
        }
      };

      var delconfig = {
        method: 'delete',
        url: `https://co-make1.herokuapp.com/api/Issue/${props.id}`,
        headers: { 
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5Mzg0MjY2MywiZXhwIjoxNTk0NzA2NjYzfQ.XUoHq1AoHbOuHFeefnKqNvjbBMHrTQZEC4M0GgjJG3M',
          'Access-Control-Allow-Origin': "*"
        }
      };
      
              

  const fetchIssue = () => {
  
      axios(config)
      .then(res => {
        console.log("issue.js info: ", res.data)
        setIssue(res.data)
      console.log("issue.js info: ", res.data)
      }
      )
      .catch(err => console.log(err.response));
  };

  
  const getNewList = () => {
    axiosWithAuth()
      .get("Issue")
      .then(res => 
        props.setIssueList(res.data)
        )
      .catch(err => console.log(err.response));
  };

  const handleDelete = e => {
    e.preventDefault();
    // axiosWithAuth()

    //   .delete(`Issue/${params.id}`)
    axios(delconfig)
      .then(function (response) {
        console.log(JSON.stringify(response.data));})
        
      
      .then(res => {
        console.log("delete", res.data);
        getNewList();
        push(`/dashboard`);})
        
     
      .catch(err =>
        console.error("Issue.js: handleDelete: err: ", err.message, err.response)
      );
  };


  if (!props.post) {
    return <div>Loading issue information...</div>;
  }

  return (
    <div className="save-wrapper">
       <IssueCards {...props} post={props} />
      
      <button
        className="md-button"
        onClick={() => push(`/update-issue/${props.id}`)}
      >
        Edit
      </button>
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Issue;