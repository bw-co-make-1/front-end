import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import IssueCards from "../component/IssueCards.js";
import axios from "axios";
import axiosWithoutAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux';

import { GetPosts } from '../actions';

//Currently commented out until posts can be populated, 
// as well as the card can be worked out.

const Dashboard = () => {
const [issue, setIssue] = useState([]);

const getIssues = () => {
  axiosWithoutAuth()
  // axios
  // .get('https://co-make1.herokuapp.com/api/Issue')
.get('/Issue')
  .then(res => {
      console.log("issues:", res.data);
      setIssue(res.data);
    })
  .catch(err => console.log(err.response))
};

useEffect(() => {
  getIssues(); //errors out, does not retain Token or login upon connect attempt.
  
}, []);
console.log("Updated Issues:", issue );

  return (
    <div className="post-list">
      {issue.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <IssueCards post={post} /> 
          </Link>
        ))
      }
    </div>
  );
}

export default Dashboard;
