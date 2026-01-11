import { Component } from "react";

class RadioButtonsClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOption: 'option1'
        };
    }

    handleChange = (event) => {
        this.setState({selectedOption: event.target.value});
    }

    render() {
      return (
        <div className="m-2 p-x-1 bg-fuchsia-300 border border-dotted rounded-b-lg">
          <h1 className="text-center font-serif font-bold italic text-purple-600">Radio Buttons - Class Component</h1>

          <label htmlFor="">
            <input type="radio" name="" id=""
                value="option1" checked={this.state.selectedOption === 'option1'} 
                onChange={this.handleChange}
            />
            Option1
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" 
                value="option2"
                onChange={this.handleChange}
                checked={this.state.selectedOption==='option2'}
            />Option2
          </label>
          <p className="p-3">Selected Option: {this.state.selectedOption}</p>
        </div>
      )
    }
}

export default RadioButtonsClass