import React from "react";
import Button from 'react-bootstrap/Button';
import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ title, img, desc, link, remove }) => {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={img} alt={title} />
      <Button variant="dark"><Link className="postLink" to={link}>Read more</Link> </Button>
      <Button variant="danger" onClick={remove}>Remove this post</Button>
      
    </div>
  );
};

export default PostCard;
