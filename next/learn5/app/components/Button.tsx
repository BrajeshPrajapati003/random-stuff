import React from 'react'

type buttonProps = {
    data: string
    action: ()=> void
}

function action(){
    window.alert("Button clicked!");
    console.log("Button clicked");
    
    
}

const Button: React.FC<buttonProps> = ({data, action}) => 
    <button onClick={action} className='text-black bg-white border-green-200 ml-8 mt-8'>{data}</button>


export default Button
