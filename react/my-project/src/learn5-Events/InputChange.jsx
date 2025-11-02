import { useState } from "react"

const InputChange = ()=> {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="bg-linear-to-bl from-indigo-700 via-purple-400 to-pink-500 border-4 rounded-3xl m-4">
            <h1 className="bg-linear-to-r from-teal-100 via-emerald-400 to rounded-3xl p-2 m-2 bg-blue-300 text-center">Input change Event</h1>
            <input type="text" value={inputValue} placeholder="Enter a Value" onChange={handleChange} className="border font-serif rounded placeholder-red-700 m-4 pl-3"/>
            <p className="mb-2 ml-4">Current Value: {inputValue}</p>
        </div>
    )
}

export default InputChange;