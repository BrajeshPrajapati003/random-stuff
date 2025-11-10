'use client'

import React, { useRef, useState } from 'react'
import Button from './components/Button'

function Page() {

  const input = useRef<HTMLInputElement>(null)

  const handleSubmit = (e:React.FormEvent)=> {
    e.preventDefault()
  }

  const handlechange = (e:React.ChangeEvent)=> {
    
  }

  const fn = ()=> {
    console.log("Function 'fn' is called");
    
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={input} onChange={handlechange}/>
        <button>Click</button>
        <Button data='90' action={fn}/>
      </form>
    </div>
  )
}

export default Page
