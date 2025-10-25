import Piece from './piece';

class Rook extends Piece{
    constructor(type, color, position){
        super(type, color, position);
        this.value = 3;
        if(this.color == "white"){
            this.symbol = "\u2656";
        } else {
            this.symbol = "\u265C";
        }
    }
    render(){
        // console.log("~Rook Created~");
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Rook;