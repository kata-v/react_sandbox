import React from 'react';
import { Link } from 'react-router-dom';


const MainNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" exact>Home</Link>
                </li>
                <li>
                    <Link to="/about" exact>About</Link>
                </li>
                <li>
                    <Link to="/blog" exact>Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainNav;
