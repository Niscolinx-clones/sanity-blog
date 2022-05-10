import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'
import { urlFor } from '../sanity'
import { Post, PostProps } from '../typings'

function Trending({ posts }: PostProps) {
  const [fetchedPosts, setFetchedPosts] = useState<object[]>([])

  const formatDate = (dateToFormat: string): string => {

    const date = new Date(dateToFormat)

    const updatedDate = date.toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
    })

    return updatedDate
  }

  useEffect(() => {

    let tempPosts: object[] = []
    posts.map((post) => {
      const updatedPost = {...post}
      updatedPost._createdAt = formatDate(updatedPost._createdAt)

      tempPosts.push(updatedPost)
    })

    setFetchedPosts(tempPosts)
    
  }, [])


  return (
    <div className="col-end-18 col-start-2 mt-10 grid">
      <header className="mb-3 flex items-center">
        <TrendingSvg />
        <p className="ml-2 text-xs font-bold uppercase">Trending on Medium</p>
      </header>
      {fetchedPosts && fetchedPosts.map((post) => {
        console.log(post)
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
