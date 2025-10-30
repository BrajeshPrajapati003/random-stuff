import React from 'react'

const Greeting = (props) =>{
    return (
        <div>
            <h2 className='text-center text-blue-900'>Hello, {props.name}!</h2>
        </div>
    )
}

export default Greeting;