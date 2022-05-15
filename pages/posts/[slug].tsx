import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'

export default function Slug(props: any) {

  return <div></div>
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const query = `*[_type == "post"]{
//       _id,
//     slug {
//         current
//     }
//   }`
//   const posts = await sanityClient.fetch(query)

//   console.log('posts', posts)
//   const paths = posts.map((post: Post) => ({
//     params: {
//       slug: post.slug.current,
//     },
//   }))

//   console.log({ paths })
//   return {
//     paths,
//     fallback: 'blocking',
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//       _id,
//   _createdAt,
//   title,
//   body,
//     slug {
//   current
// },
// description,
// author -> {
//   name,
//   image
// },
// mainImage,
// 'comments': *[
//   _type == "comment" && post._ref == ^._id && approved == true]


//   }`

//   const post = await sanityClient.fetch(query, {
//     slug: params?.slug,
//   })

//   if (!post) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       post,
//     },
//   }
// }

export const getServerSideProps:GetServerSideProps = async(props) => {
console.log('props for server', props)
 
 const query = `*[_type == "post"]{
      _id,
      _createdAt,
      title,
      readTime,
     author -> {
        name,
        image
      },
    description,
    mainImage,
    slug
  }`

 const posts = await sanityClient.fetch(query)

 return {
   props: {
     posts,
   },
 }
}
