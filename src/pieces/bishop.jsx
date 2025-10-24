import Piece from './piece';

class Bishop extends Piece{
    constructor(props){
        super(props);
        this.value = 3;
        if(this.color == "white"){
            this.symbol = "\u2657";
        } else {
            this.symbol = "\u265D";
        }
    }
    render(){
        console.log("~Bishop Created~");
        return(
            <div>{this.symbol}</div>
        )
    }
}

export default Bishop;