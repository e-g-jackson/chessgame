/**
 * Called in App.jsx
 */

import createPiece from './createPiece';

let initialize = () => {

    console.log("Initialize Board!");
    let pieces=[
        
        createPiece('rook', 'white', 0).render(),
        createPiece('knight', 'white', 1).render(),
        createPiece('bishop', 'white', 2).render(),
        createPiece('king', 'white', 3).render(),
        createPiece('queen', 'white', 4).render(),
        createPiece('bishop', 'white', 5).render(),
        createPiece('knight', 'white', 6).render(),
        createPiece('rook', 'white', 7).render(),
        createPiece('pawn', 'white', 8).render(),
        createPiece('pawn', 'white', 9).render(),
        createPiece('pawn', 'white', 10).render(),
        createPiece('pawn', 'white', 11).render(),
        createPiece('pawn', 'white', 12).render(),
        createPiece('pawn', 'white', 13).render(),
        createPiece('pawn', 'white', 14).render(),
        createPiece('pawn', 'white', 15).render(),
        createPiece('pawn', 'black', 48).render(),
        createPiece('pawn', 'black', 49).render(),
        createPiece('pawn', 'black', 50).render(),
        createPiece('pawn', 'black', 51).render(),
        createPiece('pawn', 'black', 52).render(),
        createPiece('pawn', 'black', 53).render(),
        createPiece('pawn', 'black', 54).render(),
        createPiece('pawn', 'black', 55).render(),
        createPiece('rook', 'black', 56).render(),
        createPiece('knight', 'black', 57).render(),
        createPiece('bishop', 'black', 58).render(),
        createPiece('king', 'black', 59).render(),
        createPiece('queen', 'black', 60).render(),
        createPiece('bishop', 'black', 61).render(),
        createPiece('knight', 'black', 62).render(),
        createPiece('rook', 'black', 63).render()
    ];
    
    // let whitePieces =[
    //     createPiece("rook", "white", 0),
    //     createPiece("knight", "white", 1),
    //     createPiece("bishop", "white", 2),
    //     createPiece("king", "white", 3),
    //     createPiece("queen", "white", 4),
    //     createPiece("bishop", "white", 5),
    //     createPiece("knight", "white", 6),
    //     createPiece("rook", "white", 7),
    //     createPiece("pawn", "white", 8).render(),
    //     createPiece("pawn", "white", 9).render(),
    //     createPiece("pawn", "white", 10).render(),
    //     createPiece("pawn", "white", 11).render(),
    //     createPiece("pawn", "white", 12).render(),
    //     createPiece("pawn", "white", 13).render(),
    //     createPiece("pawn", "white", 14).render(),
    //     createPiece("pawn", "white", 15).render()
    // ];

    // let blackPieces =[
    //     createPiece("pawn", "black", 48).render(),
    //     createPiece("pawn", "black", 49).render(),
    //     createPiece("pawn", "black", 50).render(),
    //     createPiece("pawn", "black", 51).render(),
    //     createPiece("pawn", "black", 52).render(),
    //     createPiece("pawn", "black", 53).render(),
    //     createPiece("pawn", "black", 54).render(),
    //     createPiece("pawn", "black", 55).render(),
    //     createPiece("rook", "black", 56),
    //     createPiece("knight", "black", 57),
    //     createPiece("bishop", "black", 58),
    //     createPiece("king", "black", 59),
    //     createPiece("queen", "black", 60),
    //     createPiece("bishop", "black", 61),
    //     createPiece("knight", "black", 62),
    //     createPiece("rook", "black", 63)
    // ];
    
    console.log(pieces);
}

export default initialize;