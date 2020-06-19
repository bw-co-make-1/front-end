import React from "react";
import { Link } from "react-router-dom";
// import PostCard from "../posts/PostCard.js";

//Currently commented out until posts can be populated, 
// as well as the card can be worked out.

function Dashboard({ posts }) {
  return (
    <div className="post-list">
      {
        posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            {/* <PostCard post={post} /> */} 
          </Link>
        ))
      }
    </div>
  );
}

export default Dashboard;
