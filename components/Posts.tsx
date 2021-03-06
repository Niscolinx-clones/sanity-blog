import Link from 'next/link'
import { urlFor } from '../sanity'
import { PostProps } from '../typings'
import BookMarkSvg from '../assets/svgs/bookmark.svg'
import { PortableText } from '@portabletext/react'

export default function Posts({ posts }: PostProps) {

  
  const randomTextFromPost = (max:number) => {
    console.log({max})
   return Math.floor(Math.random() * max) + 1
  }

  //Style the texts 
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => <img src={urlFor(value).url()} />,
      callToAction: ({ value, isInline }: any) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }
  return (
    <div className="">
      {posts.map((post, i) => {
        return (
          <div className="mb-10 grid justify-between lg:grid-cols-[1fr,20rem]">
            <div className="">
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
                  <PortableText
                    value={
                      post.body[0].children[0].text !== ''
                        ? post.body[0]
                        : post.body[randomTextFromPost(i)]
                    }
                    components={myPortableTextComponents}
                  />
                </div>
              </Link>
              <div className="flex items-center text-[#757575]">
                <p>
                  {new Date(post.publishedAt).toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </p>
                &#1793; <span>{post.readTime} min read ??</span>{' '}
                <span className="rounded-full bg-gray-100 p-2 ">
                  {post.category[0].title}
                </span>
                <div className="ml-auto cursor-pointer">
                  <BookMarkSvg />
                </div>
              </div>
            </div>
            <div className="flex items-baseline">
              <img
                src={urlFor(post.mainImage).url()}
                alt=""
                className="h-[134px] w-[200px] object-cover"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
