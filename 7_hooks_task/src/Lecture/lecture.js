// import React, { Component } from 'react';

// class Lecture extends Component{
// state = { counter: 0 };

// addHandler = () => this.setState({ counter: this.state.counter +1});
// removeHandler = () => this.setState({counter: this.state.counter -1});
// resetHandler = () => this.setState({ counter: 0});

// render() {
//     return (
//         <div>
//             <h1>
//                 These are my votes: {this.state.counter}
//             </h1>
//             <button onClick={this.addHandler}>Add one</button>
//             <button onClick={this.removeHandler}>Remove one</button>
//             <button onClick={this.resetHandler}>Reset</button>
//         </div>

        
//     );

// }
// }

// export default Lecture;

import React, { useState } from 'react';

const Button = ({click, text, children}) => {
    return(
        <>
            <button onClick={click}>{text}{children}</button>
        </>
    );
}


/**
 * When setting the state in hooks, the names set on the const are whatever I choose.
 * The counter could be myawesomepossumcounter and the setCounter could be 
 * setThisStupidAssCounter or what ever
 */

const Lecture = () => {
    const[counter, setCounter] = useState(0);

/**
 * You can set the const functions with or without curly braces when
 * the code is this simple
 */

    const addHandler = () => {
        setCounter(counter +1)
    };
    const removeHandler = () => setCounter(counter -1);
    const resetHandler = () => setCounter(0);



    return (
        <div>
            <h1>These are my votes: {counter}</h1>
            <Button click={addHandler} text="Add one"> gfhgfghgfg </Button>
            <Button click={removeHandler} text= "Remove one"/>
            <Button click={resetHandler} text="Reset"/>
        </div>
    );
};

export default Lecture;
