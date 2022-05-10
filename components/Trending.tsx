import Link from 'next/link'
import React from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'

function Trending({posts}: PostProps) {
  return (
    <div className="col-end-18 col-start-2 grid bg-blue-700">
      <header className="flex">
        <TrendingSvg />
        <p className="text-xs font-bold uppercase">Trending on Medium</p>
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
      </header>
    </div>
  )
}

export default Trending