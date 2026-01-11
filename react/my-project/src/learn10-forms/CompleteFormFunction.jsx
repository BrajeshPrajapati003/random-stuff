import React, { useState } from 'react'

function CompleteFormFunction() {

    const [formData, setFormData] = useState({
        username:'',
        isSubscribed: false,
        gender: 'male',
        favoriteColor: 'blue'
    });

    const handleChange = (event)=>{
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked: value
        }));
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`Form submitted with the following data:
            Username: ${formData.username}
            Subscribed: ${formData.isSubscribed}
            Gender: ${formData.gender}
            Favorite Color: ${formData.favoriteColor}`);
    };

    return (
        <div className='m-2 p-2 rounded-lg bg-linear-to-bl from-cyan-300 via-emerald-500 to-red-800'>
            <h1 className='bg-clip-text text-transparent bg-linear-to-tr from-green-700 to-pink-600 via-purple-600 text-center font-serif font-semibold'>Complete Form - Functional Component</h1>

            <form onSubmit={handleSubmit}
            className='m-2 p-2 border rounded-xl'>
                <label htmlFor="">
                    Username: 
                    <input type="text" name="username" id="" 
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='Enter Your Username'
                    className='border rounded-lg m-2 text-center'/>
                </label>
                <br />
                <label htmlFor="">
                    Subscribe to Newsletter: 
                    <input type="checkbox" name="isSubscribed" id="" 
                    checked={formData.isSubscribed}
                    onChange={handleChange}
                    className='m-2'/>
                </label>
                <br />
                <label htmlFor="">
                    Gender: 
                    <input type="radio" name="gender" id="" 
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    className='ml-2'/>
                    Male
                    <input type="radio" name="gender" id="" 
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    className='ml-2'/>
                    Female
                </label>
                <br />
                <label htmlFor="">
                    Favorite Color: 
                    <select name="favoriteColor" id=""
                    value={formData.favoriteColor}
                    onChange={handleChange}
                    className='ml-2 border rounded-xl pl-1 pr-1'>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="pink">Pink</option>
                        <option value="green">Green</option>
                        <option value="cyan">Cyan</option>
                    </select>
                </label>
                <br />
                <div className='flex justify-center'>
                    <button type="submit"
                className='bg-indigo-500 rounded-lg pl-1 pr-1 border'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CompleteFormFunction
