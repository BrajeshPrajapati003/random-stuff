import { Component } from "react";

class CompleteFormClass extends Component{
    constructor(props){
        super(props);

        this.state ={
            username: '',
            isSubscribed: false,
            gender: 'male',
            favoriteColor: 'teal'
        };
    }

    handleChange = (event)=> {
        const {name, value, type, checked} = event.target;

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        alert(`Form submitted with the following data:
            Username: ${this.state.username}
            Subscribed: ${this.state.isSubscribed}
            Gender: ${this.state.gender}
            Favorite Color: ${this.state.favoriteColor}`);
    };

    render(){
        return (
            <div className="m-2 p-1 border border-black/50 bg-linear-to-br from-cyan-700 to-emerald-500 via-pink-400 rounded-lg">
                <h1 className="text-center font-bold text-gray-600 hover:text-lg transition-all">Complete Form - Class Component</h1>
                <form action="" onSubmit={this.handleSubmit}
                className="ml-1 mt-3">
                    <label htmlFor="">
                        Username:
                        <input type="text" name="username" id=""
                            value={this.state.username}
                            onChange={this.handleChange}
                            className="border ml-2 rounded"
                            placeholder="Enter Username"/>
                    </label>
                    <br />
                    <label htmlFor="">
                        Subscribe to newsletter:
                        <input type="checkbox" name="isSubscribed" id=""
                        checked={this.state.isSubscribed} 
                        onChange={this.handleChange} 
                        className="ml-2"/>
                    </label>
                    <br />
                    <label htmlFor="">
                        Gender:
                        <input type="radio" name="gender" id="" value="male"
                        checked={this.state.gender==='male'}
                        onChange={this.handleChange}
                        className="ml-2"/>
                        Male
                        <input type="radio" name="gender" id="" value="female"
                        checked={this.state.gender==='female'}
                        onChange={this.handleChange}
                        className="ml-2"/>
                        Female
                    </label>
                    <br />
                    <label htmlFor="">
                        Favorite Color:
                        <select name="favoriteColor" id=""
                        value={this.state.favoriteColor}
                        onChange={this.handleChange}
                        className="ml-2">
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="Purple">Purple</option>
                            <option value="Aqua">Aqua</option>
                        </select>
                    </label>
                    <br />
                    <div className="flex justify-center">
                        <button type="submit"
                    className="border rounded-lg pl-1 pr-1 bg-fuchsia-400">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default CompleteFormClass