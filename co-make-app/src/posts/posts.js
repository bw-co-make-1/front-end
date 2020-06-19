import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import PostCard from "./PostCard";


function Post({ addToSavedList, setPostList }) {
  const { push } = useHistory();
  const [post, setPost] = useState(null);

  const params = useParams();

  const fetchPost = (postId) => {
    axios
      .get(`https://co-make1.herokuapp.com/api/posts/${postId}`)
      .then((res) =>
      setPost(res.data)

      )
      .catch((err) => console.log(err.response));
  }; //for editing purposes to gather the information

  const savePost = () => {
    addToSavedList(post);
  }; // set a heigharchy post

  const getNewList = () => {
    axios
      .get("https://co-make1.herokuapp.com/api/posts")
      .then(res =>
        setPostList(res.data)
        )
      .catch(err => console.log(err.response));
  }; // refresh list of posts, if update or delete, or with an add.

  const handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`https://co-make1.herokuapp.com/api/posts/${params.id}`)
        //does the call to remove from api list
      .then(res => {
        console.log("delete", res.data); // to delete from API

        getNewList();
        push(`/Dashboard`); //to the dashboard

      })
      .catch(err =>
        console.error("posts.js: handleDelete: err: ", err.message, err.response)
      );
  }; // to delete a post

  useEffect(() => {
    fetchPost(params.id);
  }, [params.id]);




  if (!post) {
    return <div>Loading community post information...</div>;
  }

  return (
    <div className="save-wrapper">
      <PostCard post={post} />

      <div className="save-button" onClick={savePost}> //save post to list
        Save
      </div>
      <button
        className="md-button"
        onClick={() => push(`/update-post/${post.id}`)} //to edit
      >
        Edit
      </button>
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Post;
