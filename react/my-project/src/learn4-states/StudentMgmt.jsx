import { Component } from "react";

class StudentMgmt extends Component{
    constructor(props){
        super(props);

        // Define the initial state
        this.state = {
            firstName: "brajesh",
            lastName: "prajapati",
            email: "prajapatibrajesh003@gmail.com",
        }
    }

    // Method to update the first name
    updateFirstname = ()=> {
        this.setState( {
            firstName : "tyrant"
        })
    }

    // Update the lastname
    updateLastname = ()=> {
        this.setState( {
            lastName: "khalnayak"
        })
    }

    // Update the email
    updateEmail = ()=> {
        this.setState({
            email: "mohandaskaramchandgandhi001@gmail.com"
        })
    }

    // Render the UI
    render(){
        return (
            <div className="border m-3 p-3 rounded-3xl">
                <h1 className="text-center font-bold text-gray-500 m-2 p-2">Student Management System</h1>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Email: {this.state.email}</p>

                <div className="justify-center text flex flex-wrap gap-3.5 text-fuchsia-600 m-3">
                    <button className="cursor-pointer bg-gray-300 rounded-2xl p-2" onClick={this.updateFirstname}>Update firstname</button>
                    <button className="cursor-pointer bg-gray-300 rounded-2xl p-2" onClick={this.updateLastname}>Update lastname</button>
                    <button className="cursor-pointer bg-gray-300 rounded-2xl p-2" onClick={this.updateEmail}>Update email</button>
                </div>
            </div>
        )
    }
}

export default StudentMgmt;