import Piece from './piece';

class Knight extends Piece{
    constructor(props){
        super(props);
        this.value = 3;
        if(this.color == "white"){
            this.symbol = "\u2658";
        } else {
            this.symbol = "\u265E";
        }
    }
    render(){
        console.log("~Knight Created~");
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Knight;