import React from 'react';

class Piece extends React.Component {
    hasMoved = false;
    type;
    symbol;
    value;
    color;
    position;

    // constructor(type, color, position){
    //     super(props);
    //     this.type = type;
    //     this.color = color;
    //     this.position = position;
    // }
    piece(type, color, position) {
        this.type = type;
        this.color = color;
        this.position = position;
    };
}

export default Piece;