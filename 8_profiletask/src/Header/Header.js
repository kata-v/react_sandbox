import React from 'react';
import MainNav from '../Nav/Nav';
// import { Link } from 'react-router-dom';

import Navbar  from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

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
                <Navbar.Brand>Baking at Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <MainNav/>
            </Navbar.Collapse>
        </Navbar>
               
    );
};

export default Header;
