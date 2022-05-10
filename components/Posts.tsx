import Link from 'next/link'
import { PostProps } from '../typings'

export default function Posts({ posts }: PostProps) {
  console.log(posts)

  return (
    <div>
      {posts.map((post) => {
        return (
          <Link href={`/posts/${post.slug.current}`}>
            <p>{post.title}</p>
          </Link>
        )
      })}
    </div>
  )
}
