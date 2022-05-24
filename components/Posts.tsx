import Link from 'next/link'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'
import BookMarkSvg from '../assets/svgs/bookmark.svg'

export default function Posts({ posts }: PostProps) {
  console.log({ posts })
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
            <div className="flex">
              <p className="text-[#757575]">
                {new Date(post.publishedAt).toLocaleString('en-US', {
                  day: '2-digit',
                  month: 'short',
                })}{' '}
                ܁ <span>{post.readTime}</span> min read ܁ <span>
                  {post.category.map((categoryArr) => (
                    
                  ))}
                </span>
              </p>
              <BookMarkSvg />
            </div>
          </div>
        )
      })}
    </div>
  )
}
