'use client'

import { useParams } from 'next/navigation'
import React from 'react'

function page() {
  const {city} = useParams()
  return (
    <div className='text-white mt-[100px] w-[50%] bg-gradient-to-b from-blue950 to-pink-950'>
      {city} is the best city.
    </div>
  )
}

export default page
