import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='ml-3 mt-3'>
      About page

      <Image src={"https://i.pinimg.com/736x/e5/8b/6f/e58b6f5a24ed863e02d5bff774f11c8a.jpg"} alt='profile-pic' height={150} width={150} className='rounded-[700px]'/>
    </div>
  )
}

export default page
