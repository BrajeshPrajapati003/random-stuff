import { Component } from "react";

class Increase extends Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        };
    }

    increase = ()=> {
        this.setState( { count : this.state.count * 10 })
    }

    render(){
        return <>
            <h2 className="bg-green-700 text-white m-2 p-2">Value: {this.state.count} </h2>
            <button 
                onClick={this.increase}
                className="rounded font-bold">Multiply by 10</button>
        </>
    }
}

export default Increase;