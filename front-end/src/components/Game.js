import Board from "./Board";
import TeamData from "./fetch-data/team-data";
// import React, {useState} from 'react';

const Game = () => {
    return (
        <div className="main-game-page">
            <p>Tic Tac Toe</p>
            <Board />
            <TeamData />
        </div>
    )
}

export default Game;