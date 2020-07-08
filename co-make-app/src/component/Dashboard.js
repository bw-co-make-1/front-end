import React from "react";
import Issue from "../component/Issue";


const Dashboard = ({issues, props}) => {
console.log("issue pop: ", issues); //sees issues fine.

if (!issues) {
  return <div>We're looking for issues...</div>
}
// {console.log("Post id? " post.id);}
  return (
    <div className="post-list">
      {
      issues.map(post => (
      
          // <Link key={post.id} to={`/issue/${post.id}`}>
            <Issue
             {...post}
              id={post.id}
               props={props} 
               post={post} /> 
            // {/* required spread op to see info */}
            
          // </Link>
        ))
      }
      
    </div>
  );
}


export default Dashboard;
