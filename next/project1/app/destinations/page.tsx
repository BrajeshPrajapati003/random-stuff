'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {

  const router = useRouter()

  const destinations = ['Paris', 'Tokyo', 'NewYork']

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4 text-white'>
      <h1 className='font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-900 bg-clip-text text-transparent text-4xl hover:text-white animate-pulse'>Choose your Destination</h1>
      <div className='flex flex-col gap-4'>
        {destinations.map((d, idx)=> (
          <button key={idx} className='text-black bg-white font-bold text-2xl flex items-center justify-center rounded-xl w-[200px] h-[100px] cursor-pointer hover:opacity-[0.5] transition-all' onClick={()=>router.push(`/destinations/${d}`)}>
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Page
