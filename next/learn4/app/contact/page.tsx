import { Roboto } from 'next/font/google'
import React from 'react'


const roboto = Roboto(
    { subsets: ['latin'], weight: ['400', '800'], display: 'swap' }
)


function page() {
  return (
    <div className={roboto.className}>
      <h1 className='text-cyan-200 text-center mb-4 mt-5'>Contact page</h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum at mollitia, aspernatur accusantium ipsa consectetur quos sapiente sed deleniti quia? Ratione sint culpa eos repellat quis accusamus dolorum velit laudantium.</p>
    </div>
  )
}

export default page
