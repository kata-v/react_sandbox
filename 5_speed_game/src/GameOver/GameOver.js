import React from 'react';
import './GameOver.css';

const closeHandler = () =>{
    window.location.reload();
};

const GameOver = props => {
    return (
        <div className='backgroundLayer'>
        <div className='gameOverBox'>
            <h2>Game Over</h2>
            <p>Your score was: <span>{props.score} points</span></p>
            <button onClick={closeHandler}>x</button>
            <div className='scoretitles'>
            <p>10 points: Too slow! The city is burning!</p>
            <p>15 points: Well... At least the rich stay safe!</p>
            <p>25 points: The city is safe. For now... </p>
            <p>50 points: Are you Bruce Lee?!</p>
            </div>
        </div>
        </div>
    )
};

export default GameOver;
