import {  GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { sanityClient, urlFor } from '../../sanity'
import { Post, PostProps } from '../../typings'

 export default function Slug({post}: {post: Post}){

  return (
    <div>
      {' '}
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
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
      _id,
    slug {
        current
    }
  }`
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  console.log({ paths })
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
  _createdAt,
  title,
  body,
    slug {
  current
},
description,
author -> {
  name,
  image
},
mainImage,
'comments': *[
  _type == "comment" && post._ref == ^._id && approved == true]


  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60
  }
}



