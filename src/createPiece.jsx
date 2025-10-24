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

    switch(type){
        case "pawn": piece = new Pawn(type, color, position);
        case "rook": piece = new Rook(type, color, position);
        case "knight": piece = new Knight(type, color, position);
        case "bishop": piece = new Bishop(type, color, position);
        case "queen": piece = new Queen(type, color, position);
        case "king": piece = new King(type, color, position);
    }
    
    return piece;
};

export default createPiece;