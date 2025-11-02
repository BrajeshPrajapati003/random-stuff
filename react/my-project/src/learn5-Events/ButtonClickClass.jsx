import { Component } from "react";

class ButtonClick extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: "Hello, World",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState( { message: "Button Clicked!" });
    }

    render(){
        return (
            <div className="flex items-center justify-center bg-linear-to-br from-emerald-900 via-green-400 to-red-300 h-[200px] rounded-3xl font-mono m-2.5">
                <h1 className="pr-5">{this.state.message}</h1>
                <button 
                onClick={this.handleClick}
                className="font-bold text-shadow-black cursor-pointer">Click Me</button>
            </div>
        )
    }
}

export default ButtonClick;
