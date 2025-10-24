import Piece from './piece';

class Queen extends Piece{
    constructor(type, color, position){
        super();
        this.value = 3;
        if(color == "white"){
            this.symbol = "\u2655";
        } else {
            this.symbol = "\u265B";
        }
    }
    render(){
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Queen;