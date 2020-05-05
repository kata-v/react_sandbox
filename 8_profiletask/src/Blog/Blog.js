import React from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import Post from "../Post/Post";
import postdata from "../Post/postdata";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from 'react-bootstrap/CardDeck';

const Blog = () => {
  let match = useRouteMatch();
  const post = postdata;

  const blogList = post.map((post, index) => {
    return (
      
        <Card style={{ width: "18rem" }} key={post.id} bg="info">
          <Card.Header>Featured this Month</Card.Header>
          <Card.Img variant="top" src={post.img} alt={post.title} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.textcontent}</Card.Text>
            <Button variant="dark" href={`${match.url}/${post.title}`}>
              Read more
            </Button>
          </Card.Body>
        </Card>
      
      // <div key={post.id}>
      //     <img src={post.img} alt={post.title}/>
      //     <div>
      //         <h3>{post.title}</h3>
      //         <p>{post.textcontent}</p>
      //         <Link to={`${match.url}/${post.title}`}>Read more</Link>
      //     </div>
      // </div>
    );
  });

  const cardStacks = () => {
      return (
          <CardDeck>{blogList}</CardDeck>
      );
  };

  return (
    <div>
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <Route path={Math.path}>{cardStacks}</Route>
      </Switch>
    </div>
  );
};

export default Blog;
