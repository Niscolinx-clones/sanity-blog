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
      <header className="mb-3 flex items-center">
        <TrendingSvg />
        <p className="ml-2 text-sm font-bold uppercase">Trending on Medium</p>
      </header>
      {fetchedPosts &&
        fetchedPosts.map((post: Post, index) => {
          return (
            <div key={post._id} className='flex gap-5'>
              <span>{index + 1 < 10 ? '0' + (index + 1) : index}</span>
              <div>
                <Link href={`/posts/${post.slug.current}`}>
                  <>
                    <img
                      src={urlFor(post.author.image).url()}
                      alt="author picture"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <h3>{post.author.name}</h3>
                    <p>{post.title}</p>
                  </>
                </Link>
                <p>{post._createdAt}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Trending
