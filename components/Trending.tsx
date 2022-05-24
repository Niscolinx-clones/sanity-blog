import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'
import { urlFor } from '../sanity'
import { Post, TrendingProps } from '../typings'

function Trending({ trending }: TrendingProps) {
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
    trending.map((post) => {
      const updatedPost = { ...post }
      updatedPost.publishedAt = formatDate(updatedPost.publishedAt)

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
      <div className="grid-cols-tc grid gap-8">
        {fetchedPosts &&
          fetchedPosts.map((post: Post, index) => {
            return (
              <div key={post._id} className="flex w-full gap-5">
                <span className="text-[1.7rem] font-bold text-[#e6e6e6]">
                  {index < 9 ? '0' + (index + 1) : index + 1}
                </span>
                <div className="grid gap-1">
                  <Link href={`/post/${post.slug.current}`}>
                    <div className="contents cursor-pointer">
                      <div className="flex gap-2">
                        <img
                          src={urlFor(post.author.image).url()}
                          alt="author picture"
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <h3 className="text-sm font-medium">
                          {post.author.name}
                        </h3>
                      </div>
                      <p className="text-lg font-bold">{post.title}</p>
                    </div>
                  </Link>
                  <p className="text-[#757575]">
                    {post.publishedAt} . <span>{post.readTime}</span> min read
                  </p>
                </div>
              </div>
            )
          })}
      </div>
      <hr className=" border-[#febf17] my-10 w-full" />
    </div>
  )
}

export default Trending
