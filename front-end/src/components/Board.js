import Square from "./Square";
import React, { useState } from 'react';

const Board = () => {
    const initialSquares = [
        null, null, null, 
        null, null, null, 
        null, null, null, 
    ]

    const [square, setSquare] = useState(initialSquares);

    const handleClickEvent = (i) => {
        alert(`square ${i} is clicked`);
    };

    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClickEvent={() => handleClickEvent(i)}/>
        );
    }
    return (
        <div className="board">
            Board
            <div className="rowOfThree">
                {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
            </div>
            <div className="rowOfThree">
                {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
            </div>
            <div className="rowOfThree">
                {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;