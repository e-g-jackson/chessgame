import Piece from './piece';
import React from 'react'

class Pawn extends Piece {
    
    constructor(type, color, position){
        super();
        this.value = 1;
        if(color == "white"){
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

    render(){
        console.log("~Pawn Created~")
        return(
            <p key = {this.position}>{this.symbol}</p>
        )
    }
};

export default Pawn;