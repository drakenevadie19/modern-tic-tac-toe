import Square from "./Square";
import React, { useState } from 'react';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colummns
        [0, 4, 8], [1, 4, 7] // diagonals
    ]

    for (let line of lines) {
        const [a ,b ,c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // 'X' or 'O'
        }
    }

    return null;
}

const Board = () => {
    const initialSquares = Array(9).fill(null);

    const [square, setSquare] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClickEvent = (i) => {
        // alert(`square ${i} is clicked`);
        // 1. Make a copy of Squares state array
        const newSquare = [...square];
        // 2. Mutate the copy, settin gthe ith element to 'X'
        newSquare[i] = xIsNext ? 'X' : 'O';
        // 3. Call the setSquares function with the mutated copy
        setSquare(newSquare);

        setXIsNext(!xIsNext); 
    };

    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClickEvent={() => handleClickEvent(i)}/>
        );
    }

    const winner = calculateWinner(square);
    const status = winner 
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="board">
            <div className="status">{status}</div>
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