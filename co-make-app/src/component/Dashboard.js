import React from "react";
import { Link } from "react-router-dom";
import IssueCards from "../component/IssueCards.js";

//Currently commented out until posts can be populated, 
// as well as the card can be worked out.

function Dashboard({ issue }) {
  return (
    <div className="post-list">
      {
        issue.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            {/* <IssueCards post={post} />  */}
          </Link>
        ))
      }
    </div>
  );
}

export default Dashboard;
