import { Component } from "react";

class StudentDetails extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstname: "tester",
            lastname: "testSurname",
            age: "20",
        }
    }

    render(){
        const { firstname, lastname, age } = this.state;
        return (
            <div className="m-4 p-2 border text-amber-400 rounded-t-4xl rounded-b-2xl">
                <h1 className="text-emerald-600 font-mono justify-center text-center underline decoration-dotted">User Details Here</h1>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Age: {age}</p>
            </div>
        )
    }
}


export default StudentDetails;