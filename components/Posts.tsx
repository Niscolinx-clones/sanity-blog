import Link from 'next/link'
import { PostProps } from '../typings'

export default function Posts({ posts }: PostProps) {
  console.log(posts)

  return (
    <div>
      {posts.map((post) => {
        ;<Link href={`/posts/${post.slug.current}`}></Link>
      })}
    </div>
  )
}
