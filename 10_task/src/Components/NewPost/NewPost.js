import React, { useState } from "react";
import "./NewPost.css";
import axios from 'axios';
import Button from "react-bootstrap/Button";

const NewPost = () => {

  const [newPost, setNewPost] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => { 
    setNewPost({
      ...newPost,
      [e.target.name]:e.target.value,
    })

  };

  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="newPostContainer">
      <h1>Add new post</h1>
      <form className="newPost">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={changeValueHandler}/>
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea type="text" name="desc" id="desc" onChange={changeValueHandler} />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input type="text" name="img" id="img" onChange={changeValueHandler} />
        </div><Button variant="dark" onClick={addPostHandler} type="submit"> Add new post </Button>
        {/* <button onClick={addPostHandler} type="submit">Add new post</button> */}
      </form>
    </div>
  );
};

export default NewPost;
