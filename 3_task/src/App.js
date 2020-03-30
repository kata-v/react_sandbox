import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0

  };

  addLikesHandler= () => {
console.log('test');
this.setState({likes: this.state.likes +1})
  };

  removeLikeHandler= () => {
    console.log('test');
    this.setState({likes: this.state.likes -1})
      };

  resetLikesHandler= () => {
        console.log('test');
        this.setState({likes: this.state.likes = 0})
          };

  render(){
    return (
      <div>
        <h1>
          Total likes: {this.state.likes}
        </h1>
<button onClick={this.addLikesHandler}>Add like</button>
<button onClick={this.removeLikeHandler}>Unlike</button>
<button onClick={this.resetLikesHandler}>Reset</button>
      </div>
    );
  }
}



export default App;
