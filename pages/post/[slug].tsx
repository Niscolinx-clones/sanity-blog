import React from 'react'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'

export default function Post() {
  return <div>[slug]</div>
}

export const getStaticPaths = async () => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
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
    params: query,
  }
}

export const getStaticProps = async (props: any) => {
  console.log(props)
}
