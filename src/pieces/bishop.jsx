import Piece from './piece';

class Bishop extends Piece{
    constructor(type, color, position){
        super();
        this.value = 3;
        if(color == "white"){
            this.symbol = "\u2657";
        } else {
            this.symbol = "\u265D";
        }
    }
    render(){
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Bishop;