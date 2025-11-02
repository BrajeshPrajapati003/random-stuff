import { useState } from "react"

const InputChange2 = ()=> {
    const [ inputValue, setInputValue ] = useState("");

    const handleChange = (event)=> {
        setInputValue(event.target.value);
    };

    return (
        <div className="bg-gray-400">
            <h1 className="underline decoration-wavy text-purple-600">Input Change Event</h1>
            <input type="text" value={inputValue} onChange={handleChange} className="border border-red-400"/>
            <p>Current Value: {inputValue}</p>
        </div>
    );
}

export default InputChange2;