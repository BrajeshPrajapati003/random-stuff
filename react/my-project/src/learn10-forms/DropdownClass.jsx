import { Component } from "react";

class DropdownClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedValue: 'option1'
        }
    }

    handleChange =(event)=> {
        this.setState({selectedValue: event.target.value});
    }

    render(){
        return (
            <div className="bg-emerald-400 m-1 p-1 rounded-sm">
                <h1 className="text-center font-medium font-stretch-extra-condensed">Controlled Select Dropdown</h1>
                <select name="" id=""
                value={this.state.selectedValue} onChange={this.handleChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                    <option value="option6">Option 6</option>
                </select>
                <p className="pt-2">Selected Value: {this.state.selectedValue}</p>
            </div>
        );
    }
}

export default DropdownClass