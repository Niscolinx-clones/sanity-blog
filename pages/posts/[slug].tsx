import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { sanityClient } from '../../sanity'
import { Post, PostProps } from '../../typings'

 export default function Slug({post}: {post: Post}){

  return <div>{post.title}</div>
}


export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
      _id,
    slug {
        current
    }
  }`
  const posts = await sanityClient.fetch(query)

  console.log('post', posts)
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
  }
}



