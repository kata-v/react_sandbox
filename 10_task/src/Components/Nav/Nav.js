import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

const MainNav = () => {
  return (
    <div className="mainNavContainer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/newpost">New Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
