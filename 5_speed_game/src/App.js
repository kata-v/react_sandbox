import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle'

class App extends Component{
  state = {
 score: 0,
  };

  clickHandler = (circleID) => {
    console.log("I was clicked!", circleID);
    this.setState({
      score: this.state.score +1
    })
  };

  render(){
  return (
    <div className="App">
      <h1>---Game of Speed---</h1>
      <p>Your score is: {this.state.score}</p>
      <main>
        <Circle clickyclick={this.clickHandler.bind(this, "number one")}/>
        <Circle clickyclick={this.clickHandler.bind(this, 2)}/>
        <Circle clickyclick={this.clickHandler.bind(this, 3)}/>
        <Circle clickyclick={this.clickHandler.bind(this, 4)}/>
      </main>
      <button>Start Game</button>
      <button>Give up</button>
    </div>
  );
}
}

export default App;
