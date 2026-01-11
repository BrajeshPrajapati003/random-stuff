import React, { useState } from 'react'

function RadioBtnFunctions() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange =(event)=> {
        setSelectedOption(event.target.value);
    }

  return (
    <div className='text-cyan-500 border rounded-sm border-pink-400 m-2'>
      <h1 className='text-center font-semibold'>Radio Buttons - Functional Component</h1>
      <label htmlFor="" className='m-0.5'>
        <input type="radio" name="branch" id="" className='ml-2' value="CSE"
        checked={selectedOption === 'CSE'} onChange={handleChange}/> CSE
        <input type="radio" name="branch" id="" className='ml-2' value="IT"
        checked={selectedOption === 'IT'} onChange={handleChange}/> IT
        <input type="radio" name="branch" id="" className='ml-2' value="EX"
        checked={selectedOption === 'EX'} onChange={handleChange}/> EX
      </label>
      <br />
      <div className="flex justify-center">
        <button onClick={()=>{
        alert(`Selected Button is: ${selectedOption}`)
      }}
      className='mb-1 border bg-amber-600 rounded-xl pl-1 pr-1 cursor-pointer text-gray-800'>Check Data</button>
      </div>
    </div>
  )
}

export default RadioBtnFunctions
