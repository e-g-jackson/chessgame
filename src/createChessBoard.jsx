/**
 * Called from ./main.jsx
 */
import initialize from './initialize';

let createChessBoard = () =>{
    
    console.log("createChessBoard is running!")
    let board = []

    for (let i = 7; i >= 0; i--){
        let row = [];
        for (let j = 0; j < 8; j++){
            let isDarkSquare = (i + j) % 2 === 0;
            let squareColorClass = isDarkSquare ? 'darkSquare' : 'lightSquare';
            row.push(
                <div key = {`${numberToLetter(j)}${i + 1}`} id ={`${j + (i*8)}`} className = {`square ${squareColorClass}  row${i + 1} column${numberToLetter(j)}`}>
                    {/* place images? */}{j+(i*8)}
                </div>
            )
        };
        board.push(row);
    };

    // places pieces in their starting places on the board
    initialize(board);
    
    return (
        <table key = 'chessboard'>
            <tbody key = 'chessboardTable'>
                {board.map((row) => {
                    // console.log("ROW.KEY")
                    // console.log(row.key);
                    // console.log(row)
                    return(
                        //FIX ME - Math.random() is generating a unique key, but needs to be improved.
                        <tr key = {`row${Math.random()*100}`}>
                            {row.map(
                                (square) => {
                                    // console.log("SQUARE.KEY");
                                    // console.log(square.key);
                                    // console.log(square);
                                    return(<td id = {square.key} key = {square.key}>{square}</td>)   
                                }
                            )}
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    )
}

let numberToLetter = (number) => {
    switch (number){
        case 0: return "A";
        case 1: return "B";
        case 2: return "C";
        case 3: return "D";
        case 4: return "E";
        case 5: return "F";
        case 6: return "G";
        case 7: return "H";
    }
}

export default createChessBoard;