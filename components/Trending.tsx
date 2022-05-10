import Link from 'next/link'
import React from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'

function Trending({ posts }: PostProps) {
  return (
    <div className="col-end-18 col-start-2 grid mt-10">
      <header className="flex items-center mb-3">
        <TrendingSvg />
        <p className="text-xs font-bold uppercase ml-2">Trending on Medium</p>
      </header>
      <div className="pody">
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.slug.current}`} key={post._id}>
              <>
                <p>{post.title}</p>
                <img src={urlFor(post.author.image).url()} alt="" />
              </>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Trending
