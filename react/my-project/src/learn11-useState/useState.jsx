import React from 'react'
import { useState } from 'react';

const UseState = () => {

    const [num, setNum] = useState(0);

    const increaseNum = ()=>{
        setNum(num+1)
    }

    const decreaseNum =()=>{
        setNum(num-1)
    }

    const increaseBy5 =()=>{
        setNum(num+5)
    }

    const decreaseBy5 =()=>{
        setNum(num-5)
    }

    const [arr, setArr] = useState({
        "name":"brajesh", 
        "age": 20, 
        "role": "student"
    })

    const display = ()=>{
        const newArr = {...arr}
        newArr.name = "BRAJESH"
        newArr.age = 21
        newArr.role = "Developer"
        setArr(newArr)
        console.log(arr);
    }

    const [list, setList] = useState([43, 66, 67]);

    const change = ()=>{
        const list2 = [...list]
        list2.push(69);
        setList(list2)
        console.log(list2);
    }

    const [num2, setNum2] = useState(0);

    const change2 = ()=>{
        setNum2(prev => prev+1)
        setNum2(prev => (prev+1))
        console.log(num2);
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Form submitted");
    }

  return (
    
    <div className='text-center'>
        {/* <div>
            <h1 className='m-5'>counter: {num}</h1>
        </div>
        <button onClick={increaseBy5} className='m-2 border rounded p-2'>+5</button> 
        <button onClick={increaseNum} className='m-2 border rounded p-2'>+1</button>
        
        <button onClick={decreaseNum} className='m-2 border rounded p-2'>-1</button>
       <button onClick={decreaseBy5} className='m-2 border rounded p-2'>-5</button> */}

        {/* <h1>User: {arr.name}</h1>
        <h1>Age: {arr.age}</h1>
        <h1>Role: {arr.role}</h1>
        <button onClick={display}>click</button> */}

        {/* <h1>Array: {num2}</h1>
        <button onClick={change2}>click</button> */}

        <form onSubmit={(e)=> submitHandler(e)} className='m-4'>
            <input type="text" name="text" id="" placeholder='enter your text' className='border mr-3 text-center'/>
            <button className='border px-2 rounded'>submit</button>
        </form>

    </div>
  )
}

export default UseState
