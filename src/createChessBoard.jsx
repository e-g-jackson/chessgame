/**
 * Called from ./main.jsx
 */

let createChessBoard = () =>{
    
    console.log("createChessBoard is running!")
    let board = []
    
    /**
     * Generates a key for each row.
     */
    let rowCounter = 0;
    let rowKeyAssignment = () => {
        switch(rowCounter){
            case 0:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowA');
            case 1:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowB');
            case 2:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowC');
            case 3:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowD');
            case 4:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowE');
            case 5:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowF');
            case 6:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowG');
            case 7:
                console.log(`counter = ${rowCounter}`)
                rowCounter++;
                return('rowH');
        }
    }

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

    return (
        <table key = 'chessboard'>
            <tbody key = 'chessboardTable'>
                {board.map((row) => {
                    return(
                        <tr key = {`${rowKeyAssignment()}`}>
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