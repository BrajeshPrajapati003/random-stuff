import React, { useState } from 'react'

function CheckboxFunction() {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event)=> {
        setIsChecked(event.target.checked);
    }

  return (
    <div className='m-2 bg-gray-700 text-white border rounded p-2'>
      <h1>Checkbox Functional Component</h1>
      <label htmlFor="">
        <input type="checkbox" name="" id="" 
        checked={isChecked}
        onChange={handleChange}/>Check Me
      </label>
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  )
}

export default CheckboxFunction
