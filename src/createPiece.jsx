/**
 * Called by initialize board, but also pawn promotion...eventually.
 */

import Pawn from './pieces/pawn';
import Rook from './pieces/rook';
import Knight from './pieces/knight';
import Bishop from './pieces/bishop';
import Queen from './pieces/queen';
import King from './pieces/king';

let createPiece = (type, color, position) => {
    let piece;
    // console.log(`createPiece:\ntype: ${type}\ncolor: ${color}\nposition:${position}`)

    switch(type){
        case "pawn": 
            piece = new Pawn(type, color, position);
            break;
        case "rook": 
            piece = new Rook(type, color, position);
            break;
        case "knight": 
            piece = new Knight(type, color, position);
            break;
        case "bishop": 
            piece = new Bishop(type, color, position);
            break;
        case "queen": 
            piece = new Queen(type, color, position);
            break;
        case "king": 
            piece = new King(type, color, position);
            break;
    }
    // console.log(`Piece in createPiece:\n${piece}`)
    
    return piece;
};

export default createPiece;