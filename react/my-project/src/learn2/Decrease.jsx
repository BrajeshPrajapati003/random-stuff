import { Component } from "react";

class Decrease extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: 50
        }
    }

    decrease = ()=> {
        this.setState( { value : this.state.value / 2});
    }

    render(){
        return <div className="flex justify-center text-center">
            <h1 className="font-red-400 text-fuchsia-500">New Value: {this.state.value} </h1>
            <button 
                onClick={this.decrease}
                className="text-cyan-40 ml-2">Divide by 2</button>
        </div>
    }
}

export default Decrease;