import React from 'react';
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import Post from '../Post/Post';
import postdata from '../Post/postdata';


const Blog = () => {
    let match= useRouteMatch();
    const post= postdata;

    const blogList = post.map((post, index) =>{
        return (
            <div key={post.id}>
                <img src={post.img} alt={post.title}/>
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.textcontent}</p>
                    <Link to={`${match.url}/${post.title}`}>Read more</Link>
                </div>
            </div>


        );

    });


    return (
        <div>
            <Switch>
                <Route path='/blog/:postId'>
                    <Post/>
                </Route>
                <Route path={Math.path}>{blogList}</Route>
            </Switch>
        </div>
    );
};

export default Blog;
