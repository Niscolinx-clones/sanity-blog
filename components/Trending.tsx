import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'
import { urlFor } from '../sanity'
import { Post, PostProps } from '../typings'

function Trending({ posts }: PostProps) {
  const [fetchedPosts, setFetchedPosts] = useState<Post[]>()

  const formatDate = (dateToFormat: string) => {
    const date = new Date(dateToFormat)

    const updatedDate = date.toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
    })

    return updatedDate
  }

  useEffect(() => {
    let tempPosts: Post[] = []
    posts.map((post) => {
      const updatedPost = { ...post }
      updatedPost._createdAt = formatDate(updatedPost._createdAt)

      tempPosts.push(updatedPost)
    })

    setFetchedPosts(tempPosts)
  }, [])

  return (
    <div className="col-end-18 col-start-2 mt-10 grid">
      <header className="mb-5 flex items-center">
        <TrendingSvg />
        <p className="ml-2 text-sm font-bold uppercase">Trending on Medium</p>
      </header>
      <div className='grid gap-8'>
        {fetchedPosts &&
          fetchedPosts.map((post: Post, index) => {
            return (
              <div key={post._id} className="flex w-full gap-5">
                <span className="text-[1.7rem] font-bold text-[#e6e6e6]">
                  {index + 1 < 10 ? '0' + (index + 1) : index}
                </span>
                <div className="grid gap-1">
                  <Link href={`/posts/${post.slug.current}`}>
                    <div className="cursor-pointer contents">
                      <div className="flex gap-2">
                        <img
                          src={urlFor(post.author.image).url()}
                          alt="author picture"
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <h3 className="font-medium text-sm">{post.author.name}</h3>
                      </div>
                      <p className="text-lg font-bold">{post.title}</p>
                    </div>
                  </Link>
                  <p className="text-[#757575]">
                    {post._createdAt} . <span>{post.readTime}</span> min read
                  </p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Trending
