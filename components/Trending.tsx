import Link from 'next/link'
import React, { useState } from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'

function Trending({ posts }: PostProps) {
  const [getDate, setGetDate] = useState<string>()

  const date = new Date()

  date.toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
  })

  const changeDate = [...posts]

  console.log({ changeDate })

  return (
    <div className="col-end-18 col-start-2 mt-10 grid">
      <header className="mb-3 flex items-center">
        <TrendingSvg />
        <p className="ml-2 text-xs font-bold uppercase">Trending on Medium</p>
      </header>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <span>01</span>
            <Link href={`/posts/${post.slug.current}`}>
              <>
                <img
                  src={urlFor(post.author.image).url()}
                  alt="author picture"
                  className=""
                />
                <h3>{post.author.name}</h3>
                <p>{post.title}</p>
              </>
            </Link>
            <p>{post._createdAt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Trending
