import { createClient, createCurrentUserHook } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-10-21'
}
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
const builder = imageUrlBuilder({
  clientConfig: config,
})

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

//Helper function for using the current user logged in account
export const useCurrectUser = createCurrentUserHook({
  projectId: config.projectId!,
  dataset: config.dataset,
})
