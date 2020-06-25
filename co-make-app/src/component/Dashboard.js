import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import IssueCards from "../component/IssueCards.js";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux';
import { GetPosts } from '../actions';


const Dashboard = () => {
const [issue, setIssue] = useState([]);

const getIssues = () => {
  axiosWithAuth()
.get('/Issue')
  .then(res => {
      console.log("issues:", res.data);
      setIssue(res.data);
    })
  .catch(err => console.log(err.response))
};

useEffect(() => {
  getIssues(); 
  
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
const mapStateToProps = state => {
  return {
    issue: state.issue
  }
}

export default connect(mapStateToProps, {GetPosts} )(Dashboard);
