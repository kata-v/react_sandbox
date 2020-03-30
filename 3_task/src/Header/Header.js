import React from "react";
import './Header.css';

const Header = () => {
    const dateToday = new Date();
    return(
        <div className="dateHeader">
            <h1>Like Counter</h1>
            <p>The date is: {dateToday.toDateString()}</p>
        </div>
    );
};

export default Header;