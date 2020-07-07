import React, {useState, useEffect} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import IssueCards from "../component/IssueCards.js";
import axiosWithAuth from "../utils/axiosWithAuth.js";

import axios from 'axios';


const Dashboard = ({issues}) => {
console.log(issues); //sees issues fine.

if (!issues) {
  return <div>We're looking for issues...</div>
}

  return (
    <div className="post-list">
      {
      issues.map(post => (
          <Link key={post.id} to={`/issue/${post.id}`}>
            <IssueCards {...post} /> 
            {/* required spread op to see info */}
            
          </Link>
        ))
      }
    </div>
  );
}


export default Dashboard;
