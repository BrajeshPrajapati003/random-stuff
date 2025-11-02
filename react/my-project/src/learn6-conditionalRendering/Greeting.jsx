import { useState } from "react";

const Greeting = ()=> {
    console.log("conditional Rendering");
    

    const [ isMorning, setIsMorning ] = useState(true);

    return (
        <div className="m-2 bg-linear-to-br from-fuchsia-300 via-purple-500 to-gray-300 border-2 rounded-4xl flex justify-evenly">
            <h1 className="font-bold leading-9">{isMorning ? `Good Morning!` : `Good Evening`}</h1>
            <button onClick={() => setIsMorning(!isMorning)} className="col-span- bg-pink-200 rounded-2xl p-2">Toggle Greeting</button>
        </div>
    );
}

export default Greeting;
