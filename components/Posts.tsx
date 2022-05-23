import Link from 'next/link'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'

export default function Posts({ posts }: PostProps) {
  return (
    <div className="">
      {posts.map((post) => {
        return (
          <div className="grid gap-1">
            <Link href={`/post/${post.slug.current}`}>
              <div className="contents cursor-pointer">
                <div className="flex gap-2">
                  <img
                    src={urlFor(post.author.image).url()}
                    alt="author picture"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <h3 className="text-sm font-medium">{post.author.name}</h3>
                </div>
                <p className="text-lg font-bold">{post.title}</p>
              </div>
            </Link>
            <p className="text-[#757575]">
              {post.publishedAt} . <span>{post.readTime}</span> min read
            </p>
          </div>
        )
      })}
    </div>
  )
}
