import Piece from './piece';
// import ReactDOM from 'react-dom/client'
import { useRef } from 'react'

class Pawn extends Piece {
    constructor(type, color, position){
        super(type, color, position);
        this.value = 1;
        if(this.color == 'white'){
            this.symbol = "\u2659";
        } else {
            this.symbol = "\u265F";
        }
    }
        
    possibleMoves(startLocation){
        // No attack moves
        if(this.hasMoved){
            return [
                startLocation + 8
            ];
        } else {
            return [
                startLocation + 8,
                startLocation + 16
            ];
        }
    }
    // targetDiv = () => {
    //     const targetSquare = document.getElementById(`${this.position}`);
    //     const root = ReactDOM.createRoot(targetSquare);
    //     console.log(targetSquare);
    //     root.render(
    //         <React.StrictMode>
    //             <p key = {this.position}>{this.symbol}</p>
    //         </React.StrictMode>
    //     )
    // }

    render(){
        // console.log("~Pawn Created~");

        return(
            <p key = {this.position}>{this.symbol}</p>
        )
    }
};

export default Pawn;