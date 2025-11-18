'use client'
import { useParams } from 'next/navigation'
import Paris from '@/src/assets/paris.webp'
import Tokyo from '@/src/assets/tokyo.jpg'
import NewYork from '@/src/assets/newyork.jpg'
import Image from 'next/image'

function page() {
    const {city} = useParams()

  return (
    <div className='text-gray-400 mt-[100px] w-[50%]'>
      {city} is a beautiful city
        { 
          city == "Paris" && <Image src={Paris} width={400} height={400} alt='Paris image'/> 
        }
        { 
          city == "Tokyo" && <Image src={Tokyo} width={400} height={400} alt='Paris image'/> 
        }
        { 
          city == "NewYork" && <Image src={NewYork} width={400} height={400} alt='Paris image'/> 
        }
    </div>
  )
}

export default page
