import React from "react";
import { useParams, Link } from "react-router-dom";
import postdata from "../Post/postdata";


const Post = () => {
  let { postId } = useParams();
  let post = postdata.find((p) => p.title === postId);

  return (  
    <div>
      <div>
        <img src={post.img} alt={post.title} />
      </div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.textcontent}</p>
        <Link to="/blog">Back to Blog Page</Link>
      </div>
    </div>
  );
};

export default Post;
