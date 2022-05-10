import Link from 'next/link'
import React from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'

function Trending({ posts }: PostProps) {
  return (
    <div className="col-end-18 col-start-2 mt-10 grid">
      <header className="mb-3 flex items-center">
        <TrendingSvg />
        <p className="ml-2 text-xs font-bold uppercase">Trending on Medium</p>
      </header>
      <div className="">
        {posts.map((post) => {
          return (
            <>
              <span></span>
              <Link href={`/posts/${post.slug.current}`} key={post._id}>
                <>
                  <p>{post.title}</p>
                  <img src={urlFor(post.author.image).url()} alt="" />
                </>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Trending
