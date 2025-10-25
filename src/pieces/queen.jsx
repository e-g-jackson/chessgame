import Piece from './piece';

class Queen extends Piece{
    constructor(type, color, position){
        super(type, color, position);
        this.value = 3;
        if(this.color == "white"){
            this.symbol = "\u2655";
        } else {
            this.symbol = "\u265B";
        }
    }
    render(){
        // console.log("~Queen Created~");
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Queen;