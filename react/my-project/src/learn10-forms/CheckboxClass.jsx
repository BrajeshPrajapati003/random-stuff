import { Component } from "react";

class CheckboxClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    handleChange  = (event) => {
        this.setState({isChecked: event.target.checked})
    }

    render() {
      return (
        <div className="m-2 p-2 bg-green-200 rounded-2xl">
          <h1 className="text-center font-semibold">Controlled Checkbox - Class Component</h1>
          <label htmlFor="">
            <input type="checkbox" 
            checked={this.state.isChecked}
            onChange={this.handleChange}/>
            Check Me
          </label>
          <p>Checkbox is {this.state.isChecked ? 'checked' : 'unchecked'}</p>
        </div>
      )
    }
    
}

export default CheckboxClass