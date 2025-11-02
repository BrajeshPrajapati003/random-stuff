import { Component } from "react";

class ButtonClickParams extends Component{
    handleClick = (name)=> {
        alert(`Hello, ${name}`)
    };

    render(){
        return (
            <div className="bg-black m-2 p-2 flex items-center justify-center">
                <button className="m-4 p-4 border-2 border-emerald-400 bg-gray-500 text-white rounded-2xl" onClick={()=> this.handleClick("Brajesh")}>Click Me</button>
            </div>
        );
    }
}

export default ButtonClickParams;