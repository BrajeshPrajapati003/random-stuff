import React from 'react'

interface Props{
  params: Promise<{username: string}>;
}

async function page({params}: Props) {
  const {username} = await params
  console.log(username);
  
  return (
    <div>Profile for {username}</div>
  ) 
}

export default page
