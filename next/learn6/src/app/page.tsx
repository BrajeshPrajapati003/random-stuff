import { log } from 'console'
import React, { useEffect } from 'react'

// async function page() {

  // NOTE: SSR
  // let response = await fetch('http://localhost:3000/api/user',{
  //   cache: 'no-store'
  // })
  
  // let data = await response.json()
  // console.log(data);
  
  // NOTE: SSG
  // let response = await fetch('http://localhost:3000/api/user', {
  //   cache: 'force-cache'
  // })

  // let data = await response.json()
  // console.log(data);

  // NOTE: ISR
  // let response = await fetch('http://localhost:3000/api/user', {
  //   next: {revalidate: 10}
  // })

  // let data = await response.json()
  // console.log(data);
  
async function page{

  // NOTE: CSR
  const handleApi = async ()=> {
    let response = await fetch('/api/user')
    let data = await response.json()
    console.log(data);
  }

  useEffect(()=> {
    handleApi()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default page
