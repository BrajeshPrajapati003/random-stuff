import React, { useState } from 'react'

function CompleteForm() {

    const [formData, setFormData] = useState({
        username: '',
        isSubscribed: false,
        gender: '',
        favoriteColor: '',
    });

    const handleChange = (event)=> {
        console.log(event.target.value);
        
        const {name, value, type, checked} = event.target;

        setFormData((prevFormData)=>({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event)=>{
        event.preventDefault();

        alert(`Form submitted data:
            Username: ${formData.username}
            Subscribed: ${formData.isSubscribed}
            Gender: ${formData.gender}
            Favorite Color: ${formData.favoriteColor}`);
    };


  return (
    <div className='border border-blue-500 m-2'>
      <h1 className='text-center font-serif mt-1'>Complete Form Practice</h1>
      <form action="__blank"
      onSubmit={handleSubmit}
      className='m-2'>
        <label htmlFor="">
            Username:
            <input type="text" name="username" id="" placeholder='Enter your username' 
            value={formData.username}
            onChange={handleChange} className='border text-center ml-1 rounded-lg border-pink-600 text-amber-700' />
        </label>
        <br />
        <label htmlFor="">
            Subscribe to NewsLetter:
            <input type="checkbox" name="isSubscribed" id="" 
            onChange={handleChange} className='ml-1'
            checked={formData.isSubscribed}/>
        </label>
        <br />
        <label htmlFor="">
            Gender:
            <input type="radio" name="gender" id="" 
            value="male" className='ml-1'
            onChange={handleChange}
            checked={formData.gender === 'male'}/>Male
            <input type="radio" name="gender" id="" 
            value="female" className='ml-1'
            onChange={handleChange}
            checked={formData.gender === 'female'}/>Female
        </label>
        <br />
        <label htmlFor="">
            Favorite Color:
            <select name="favoriteColor" id=""
            value={formData.favoriteColor}
            onChange={handleChange}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="white">White</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </label>
        <br />
        <div className="flex justify-center">
            <button type="submit" 
            className='border rounded-sm cursor-pointer pl-1 pr-1'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CompleteForm
