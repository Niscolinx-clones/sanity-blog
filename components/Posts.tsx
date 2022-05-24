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
          <div className="flex gap-1">
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
              <div className="flex items-center text-[#757575]">
                <p>
                  {new Date(post.publishedAt).toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </p>
                &#1793; <span>{post.readTime} min read ܁</span>{' '}
                <span className="rounded-full bg-gray-100 p-2">
                  {post.category[0].title}
                </span>
                <BookMarkSvg />
              </div>
            </div>
            <img src={urlFor(post.mainImage).url()} alt=''/>
          </div>
        )
      })}
    </div>
  )
}
