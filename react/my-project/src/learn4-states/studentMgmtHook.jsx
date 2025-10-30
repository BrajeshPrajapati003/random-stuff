import { useState } from "react"

const StudentMgmtHook = ()=> {

    // Declare state variables
    const [firstName, setFirstName] = useState("Brajesh");
    const [lastName, setLastName] = useState("Prajapati");
    const [email, setEmail] = useState("prajapatibrajesh003@gmail.com");

    // render the UI
    return (
        <div className="border m-3 p-3 rounded-2xl">
            <h1 className="text-center font-bold text-cyan-500 m-2 p-2">Student Management System</h1>
            
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>

            <div className="justify-center text flex flex-wrap gap-3.5 text-fuchsia-600 m-3">
                <button className="cursor-pointer bg-cyan-300 rounded-2xl p-2" onClick={() => setFirstName("tyrant")}>Update firstname</button>
                <button className="cursor-pointer bg-cyan-300 rounded-2xl p-2" onClick={() => setLastName("surname")}>Update lastname</button>
                <button className="cursor-pointer bg-cyan-300 rounded-2xl p-2" onClick={() => setEmail("tester@gmail.com")}>Update email</button>
            </div>
        </div>
    )
}

export default StudentMgmtHook;