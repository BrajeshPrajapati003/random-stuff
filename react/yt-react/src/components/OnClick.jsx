import { useState } from 'react'


const OnClick = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault();

    alert(`Name: ${name}, Email: ${email}, Password: ${password}`)
  }

  const reset = ()=> {
    setName("");
    setEmail("");
    setPassword("");

  }

  return (
    <div>
      <div>
        <form className='bg-linear-to-bl from-purple-400 to-blue-400 mb-2 mt-2 p-2 border rounded-2xl'>
          <br />
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' id='name' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter your Name' className='border border-amber-900 rounded'/>
          <br /><br />
          <label htmlFor='email'>Email: </label>
          <input type="email" aria-label='email'value={email} id='email' placeholder='Enter your Email' onChange={(e)=> setEmail(e.target.value)} className='border border-amber-900 rounded'/>
          <br /><br />
          <label htmlFor="password">Password: </label>
          <input type="password" id='password' onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Enter your password' className='border border-amber-900 rounded'/>
          <br /><br />

          <button type='submit' className='border border-amber-900 rounded-full w-full mb-2 font-mono p-1 hover:bg-blue-900 hover:text-white cursor-pointer animate-pulse delay-75' onClick={handleSubmit}>Submit</button>

          <button type='reset' className='border border-amber-900 rounded-full w-full mb-2 mt-2 font-mono p-1 hover:bg-blue-900 hover:text-white cursor-pointer animate-pulse delay-50' onClick={(e)=> reset(e.target.value)}>Clear</button>
        </form>
        <br />
        <p>Live Value: {name} : {email} : {password}</p>
      </div>
    </div>
  )
}

export default OnClick;
