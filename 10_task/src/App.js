import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./custom.css";


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </Router>
  );
};

export default App;
