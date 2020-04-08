import React, { Component } from 'react';
import './App.css';
import youlost from './Assets/youlost.mp3';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

class App extends Component{
  state = {
 score: 0,
 current: 0,
 showGameOver: false,
 rounds: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    if(this.state.rounds >= 5){
      this.gameOverHandler();
      return;
    }

    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1,4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });


    this.pace *=0.95;
    this.timer = setTimeout(this.next, this.pace);
    console.log('This is active circle', this.state.current);
  };

  clickHandler = (circleID) => {
    //sound from freesound.org : 505121__mitchanary__monster-roar-10
    let sound = new Audio("/monster.mp3");

    console.log("I was clicked!", circleID);

    if (this.state.current !== circleID){
      this.gameOverHandler();
      return;
    }

    sound.play();

    this.setState({
      score: this.state.score +1,
      rounds: 0,
    })
  };

  startHandler = () =>{
    this.next();

  };

  gameOverHandler = () => {
    let gameoversound = new Audio(youlost);
    gameoversound.play();

    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    })
    

  };

  render(){
  return (
    <div className="App">
      <h1>---Game of Speed---</h1>
      <p>-Your score so far is: {this.state.score}-</p>
      <p>Are you fast enough to save the city from the zombie punks?!</p> 
      <main>
        <Circle active={this.state.current === 1} buttonColor="aqua" clickyclick={this.clickHandler.bind(this, 1)}/>
        <Circle active={this.state.current === 2} buttonColor="aquamarine" clickyclick={this.clickHandler.bind(this, 2)}/>
        <Circle active={this.state.current === 3} buttonColor="violet" clickyclick={this.clickHandler.bind(this, 3)}/>
        <Circle active={this.state.current === 4} buttonColor="hotpink" clickyclick={this.clickHandler.bind(this, 4)}/>
      </main>
      <button onClick={this.startHandler}>Start Game</button>
      <button onClick={this.gameOverHandler}>Give up</button>
      {this.state.showGameOver && <GameOver score={this.state.score}/>}
    </div>
  );
}
}

export default App;
