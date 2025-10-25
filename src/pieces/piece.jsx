import React from 'react';

class Piece extends React.Component {
    hasMoved = false;
    type;
    symbol;
    value;
    color;
    position;

    constructor(type, color, position) {
        super();
        this.type = type;
        this.color = color;
        this.position = position;
        // console.log(`New Piece created:\ntype: ${type}\ncolor: ${color}\nposition:${position}`)
    };
}

export default Piece;