import Link from 'next/link'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'

export default function Posts({ posts }: PostProps) {

  return (
    <div className="col-end-18 col-start-2 mt-10 grid">
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
  )
}
