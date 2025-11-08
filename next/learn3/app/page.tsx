import React from 'react'

export default async function Home() {

  await new Promise((resolve) =>  setTimeout(resolve, 5000));
  return (
    <div>
      home page
    </div>
  )
}
