import React from "react";
import { Link } from "react-router-dom";
import IssueCards from "../component/IssueCards.js";

import { connect } from 'react-redux';

import { GetPosts } from '../actions';

//Currently commented out until posts can be populated, 
// as well as the card can be worked out.

const Dashboard = ({ issue }) => {
  return (
    <div className="post-list">
      {GetPosts()}
      {
        issue.map(post => (
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

export default connect(mapStateToProps, {GetPosts} )(Dashboard)
