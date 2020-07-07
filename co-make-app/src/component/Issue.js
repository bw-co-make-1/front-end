import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import IssueCards from "./IssueCards";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5Mzg0MjY2MywiZXhwIjoxNTk0NzA2NjYzfQ.XUoHq1AoHbOuHFeefnKqNvjbBMHrTQZEC4M0GgjJG3M';
var axios = require('axios');



function Issue({ setIssueList }) {
  const { push } = useHistory();
  const [issue, setIssue] = useState(null);
  
  const params = useParams();
  
  const fetchIssue = (issue_id) => {
    axiosWithAuth()
      .get(`/Issue/${issue_id}`, issue_id)
      .then(res => {
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
        setIssueList(res.data)
        )
      .catch(err => console.log(err.response));
  };

  const handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`Issue/${params.id}`)
      .then(res => {
        console.log("delete", res.data);
        getNewList();
        push(`/dashboard`);
        
      })
      .catch(err =>
        console.error("Issue.js: handleDelete: err: ", err.message, err.response)
      );
  };

  useEffect(() => {
    fetchIssue(params.issue_id);
  }, [params.issue_id]);

  


  if (!issue) {
    return <div>Loading issue information...</div>;
  }

  return (
    <div className="save-wrapper">
      <IssueCards post={issue} />
      
      <button
        className="md-button"
        onClick={() => push(`/update-issue/${issue.id}`)}
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