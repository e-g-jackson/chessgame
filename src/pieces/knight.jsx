import Piece from './piece';

class Knight extends Piece{
    constructor(type, color, position){
        super();
        this.value = 3;
        if(color == "white"){
            this.symbol = "\u2658";
        } else {
            this.symbol = "\u265E";
        }
    }
    render(){
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Knight;