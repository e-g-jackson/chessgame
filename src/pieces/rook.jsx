import Piece from './piece';

class Rook extends Piece{
    constructor(type, color, position){
        super();
        this.value = 3;
        if(color == "white"){
            this.symbol = "\u2656";
        } else {
            this.symbol = "\u265C";
        }
    }
    render(){
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Rook;