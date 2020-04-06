import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle'


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

class App extends Component{
  state = {
 score: 0,
 current: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1,4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });

    this.timer = setTimeout(this.next, this.pace);
    console.log('This is active circle', this.state.current);
  };

  clickHandler = (circleID) => {
    console.log("I was clicked!", circleID);
    this.setState({
      score: this.state.score +1
    })
  };

  startHandler = () =>{
    this.next();

  };

  gameOverHandler = () => {
    clearTimeout(this.timer);
  };

  render(){
  return (
    <div className="App">
      <h1>---Game of Speed---</h1>
      <p>Your score is: {this.state.score}</p>
      <main>
        <Circle active={this.state.current === 1} buttonColor="yellow" clickyclick={this.clickHandler.bind(this, 1)}/>
        <Circle active={this.state.current === 2} buttonColor="blue" clickyclick={this.clickHandler.bind(this, 2)}/>
        <Circle active={this.state.current === 3} buttonColor="green" clickyclick={this.clickHandler.bind(this, 3)}/>
        <Circle active={this.state.current === 4} buttonColor="red" clickyclick={this.clickHandler.bind(this, 4)}/>
      </main>
      <button onClick={this.startHandler}>Start Game</button>
      <button onClick={this.gameOverHandler}>Give up</button>
    </div>
  );
}
}

export default App;
