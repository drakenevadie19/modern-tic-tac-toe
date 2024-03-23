import Square from "./Square";
import React, { useState } from 'react';

const Board = () => {
    const renderSquare = (x) => {
        return (
            <Square />
        );
    }
    return (
        <div className="board">
            Board
            <div className="rowOfThree">
                {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
            </div>
            <div className="rowOfThree">
                {renderSquare(0)} {renderSquare(0)} {renderSquare(0)}
            </div>
            <div className="rowOfThree">
                {renderSquare(0)} {renderSquare(0)} {renderSquare(0)}
            </div>
        </div>
    );
}

export default Board;