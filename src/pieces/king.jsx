import Piece from './piece';

class King extends Piece{
    constructor(props){
        super(props);
        this.value = 10;
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