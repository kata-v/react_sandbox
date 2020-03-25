import React from "react";
import  "./Person.css";

const Person = props => {
return(
    <div className="card">
    <p>
        Hi, I'm {props.name}. I'm a {props.species}.
    </p>
    </div>);

};

export default Person;

