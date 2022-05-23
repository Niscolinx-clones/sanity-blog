import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Trending from '../components/Trending'
import { sanityClient } from '../sanity'
import { PostProps } from '../typings'


export const getServerSideProps = async () => {
  const post_query = `*[_type == "post"]{
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

  const trending_query = `*[_type == 'post' && groupCategory[0]._ref in *[_type == 'groupCategory' && title == 'Trending']._id][0...6]{
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

  const posts = await sanityClient.fetch(post_query)
  const trending = await sanityClient.fetch(trending_query)

  return {
    props: {
      posts,
      trending
    },
  }
}

const Home: NextPage<PostProps> = ({ posts, trending }) => {
  console.log({posts})
  return (
    <>
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Trending posts={trending} />
      {/* <Posts posts={posts} /> */}
    </>
  )
}

export default Home

