import Square from "./Square";

const Board = () => {
    return (
        <div className="board">
            Board
            <div className="rowOfThree">
                <Square /> <Square /> <Square />
            </div>
            <div className="rowOfThree">
                <Square /> <Square /> <Square />
            </div>
            <div className="rowOfThree">
                <Square /> <Square /> <Square />
            </div>
        </div>
    );
}

export default Board;