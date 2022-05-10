import Link from 'next/link'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'

export default function Posts({ posts }: PostProps) {
  console.log(posts)

  return (
    <div>
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
