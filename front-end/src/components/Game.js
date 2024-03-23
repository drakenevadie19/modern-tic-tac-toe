import Board from "./Board";
import React, {useState} from 'react';


const Game = () => {
    return (
        <div className="main-game-page">
            <p>Tic Tac Toe</p>
            <Board />
        </div>
    )
}

export default Game;