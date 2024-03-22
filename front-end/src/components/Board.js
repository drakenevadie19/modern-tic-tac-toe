import Square from "./Square";

const Board = () => {
    return (
        <div style={{
            backGroundColor: 'skyblue',
            margin: 10,
            padding: 20
        }}>
            <p>Board</p>
            <Square /> <Square /> <Square />
        </div>
    );
}

export default Board;