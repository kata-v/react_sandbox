// import React from 'react';

// const LectureMapMethod = () =>{

//     const myArray= [1,2,3,4,5,6,7,8,9,10];

//     const listItems = myArray.map((mynumber) => <li>{mynumber}</li>);

//     return(
//         <div>{listItems}</div>
//     );
// };

// export default LectureMapMethod;

import React, { Component } from 'react';

const myArray= [1,2,3,4,5,6,7,8,9,10];

class LectureMapMethod extends Component {
    state = {
        numbersList: myArray
    };

    removeHandler = (listIndex) => {
        // const myOldArray = this.state.numbersList;
        //The slice method is one way to make a copy of the array without changing the original
        // const myOldArray = this.state.numbersList.slice();
        //the spread method (done with ... dots) does a copy of the array as well
        const myOldArray = [...this.state.numbersList];
        myOldArray.splice(listIndex, 1);
        this.setState({numbersList:myOldArray});
    };

    render() {
        const listItems = this.state.numbersList.map((number, index) => (<li onClick={this.removeHandler.bind(this, index)}>{number}</li>));
        return (
             <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default LectureMapMethod;
