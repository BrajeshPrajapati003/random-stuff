import { h2 } from 'motion/react-client';
import Link from 'next/link';
import { title } from 'process'
import React from 'react'

function page() {

    const posts = [
        {
        id: 1,
        title: 'post 1',
        body: 'post 1 body',
    },
    {
        id: 2,
        title: 'post 2',
        body: 'post 2 body',
    }
];

  return (
    <div>
      <h2>Blog posts</h2>
      <div>
        {posts.map((post) => {
            return <div className="">
                <Link ></Link>
                <p>{post.body}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default page
