import React, {Component} from 'react'

class InputFieldClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value});
    };

    render(){
        return (
            <div>
                <h1 className='bold italic'>Controlled Input - Class Component</h1>
                <input type="text" 
                value={this.state.inputValue}
                onChange={this.handleChange}
                className='border border-red-500 w hover:border-amber-600'
                />
                <p className='text-purple-600'>Current Value: {this.state.inputValue}</p>
            </div>
        );
    }
}

export default InputFieldClass;