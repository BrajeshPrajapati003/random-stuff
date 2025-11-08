'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter();
  return (
    <div>
      <ul className='m-4'>
        <Link href={"/"} className=' text-lg hover:text-purple-500'><li>Home</li></Link>
        <Link href={"/about"} className='text-lg hover:text-purple-500'><li>About</li></Link>
        <Link href={"/contact"} className='text-lg hover:text-purple-500'><li>Contact</li></Link>
      </ul>
      <button className='border bg-white text-black rounded-lg m-2 hover:bg-purple-500' onClick={()=> router.push("/router")}>Click to go to Router</button>
    </div>
  )
}

export default page
