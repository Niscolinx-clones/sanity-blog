import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'

export default function Post() {
  return <div>[slug]</div>
}

export const getStaticPaths:GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
      _id,
    slug {
        current
    }
  }`
  const posts = await sanityClient.fetch(query)

  console.log(query)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: posts.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps:GetStaticProps = async ({params}) => {
  
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
    slug: params?.slug
  })

  if(!post){
      return {
          notFound: true
      }
  }

  return {
      props: {
          post
      }
  }
}
