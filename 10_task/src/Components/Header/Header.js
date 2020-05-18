import React from "react";
// import MainNav from '../Nav/Nav';
// import { Link } from 'react-router-dom';
import "../Header/Header.css";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

// const Header = () => {
//     return (
//                 <div>
//             <Link to="/">Baking at Home</Link>
//             <MainNav/>
//         </div>
//     );
// };

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <LinkContainer to="/#">
        <Navbar.Brand>Books to Be</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mainNavContainer">
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link  href="/blog">Stories</Nav.Link>
          <Nav.Link  href="/newpost">New Post</Nav.Link>
        </Nav>
        {/* <MainNav/> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
