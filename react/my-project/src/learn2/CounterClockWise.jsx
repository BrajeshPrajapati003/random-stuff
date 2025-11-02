import { Component } from "react";

class CounterClockWise extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render(){
        return <div className="m-3 p-3 font-bold text-yellow-300">
            <h3>Count: {this.state.count}</h3>
            <button 
                onClick={this.decrement}
                className="bg-black text-white rounded cursor-pointer text-center">Decrement</button>
        </div>
    }
}

export default CounterClockWise;