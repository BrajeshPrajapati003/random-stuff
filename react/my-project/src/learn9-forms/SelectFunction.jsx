import React, { useState } from 'react'

function SelectFunction() {

    const [option, setOption] = useState('');

    const handleChange = (event)=>{
        setOption(event.target.value);
    }

  return (
    <div className='m-2 border border-dashed rounded p-2'>
      <h1 className='text-center font-mono pb-4'>Select Dropdown - Functional Component</h1>
      <div className="">
        Select Your current college year: 
        <select name="year" id=""
        value={option} onChange={handleChange}
        className='border rounded-sm ml-2'>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
            <option value="5">5th Year</option>
        </select>

      </div>
        
        <p>Dropdown selected Year is: {option}</p>
    </div>
  )
}

export default SelectFunction
