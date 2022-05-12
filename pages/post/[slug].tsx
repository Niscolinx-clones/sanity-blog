import React from 'react'
import { sanityClient } from '../../sanity'

export default function Post() {
  return <div>[slug]</div>
}

export const getStaticPaths = async () => {
  const query = 
    await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
      _id,
    slug
  }`)
}
