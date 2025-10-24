import Piece from './piece';

class King extends Piece{
    constructor(type, color, position){
        super(type, color, position);
        this.value = 10;
        this.isInCheck = false;
        if(this.color == "white"){
            this.symbol = "\u2654";
        } else {
            this.symbol = "\u265A";
        }
    }
    render(){
        console.log("~King Created~");
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default King;