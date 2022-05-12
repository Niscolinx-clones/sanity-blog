import React from 'react'
import { sanityClient } from '../../sanity'

export default function Post() {
  return <div>[slug]</div>
}

export const getStaticPaths = async () => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
    slug
  }`
   const posts =  await sanityClient.fetch(query)

  console.log(query)

  return {
      params: query
  }
}

export const getStaticProps = async (props: any) => {
console.log(props)
}
