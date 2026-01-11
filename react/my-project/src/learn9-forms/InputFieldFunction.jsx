import React, { useState } from 'react'

function InputFieldFunction() {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event)=> {
        setInputValue(event.target.value);
    }
    
  return (
    <div className='bg-gray-700 text-white'>
        <h1>Controlled Input - Functional Component</h1>
        <input type="text" name="" id="" value={inputValue} onChange={handleChange}
        className='border' placeholder='Enter the username'/>
        <p>Current Value: {inputValue}</p>
    </div>
  )
}

export default InputFieldFunction

