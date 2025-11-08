'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const pathName = usePathname()
  return (
    <div className='bg-white w-full h-20 flex justify-between items-center px-5 fixed top-0'>
        <div className='text-black font-bold text-2xl'>
            🌏Travel Guide
        </div>
        <div>
            <ul className='flex justify-center items-center gap-5'>
                <Link href={"/"} className={pathName == "/"?"text-blue-500":""}><li>Home</li></Link>
                <Link href={"/destinations"} className={pathName == "/destinations"?"text-blue-500":""}><li>Destinations</li></Link>
                <Link href={"/contact"} className={pathName == "/contact"?"text-blue-500":""}><li>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav
