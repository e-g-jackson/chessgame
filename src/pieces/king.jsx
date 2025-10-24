import Piece from './piece';

class King extends Piece{
    constructor(type, color, position){
        super();
        this.value = 3;
        if(color == "white"){
            this.symbol = "\u2654";
        } else {
            this.symbol = "\u265A";
        }
    }
    render(){
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default King;