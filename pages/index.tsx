import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Trending from '../components/Trending'
import { sanityClient } from '../sanity'
import { PostProps } from '../typings'

const Home: NextPage<PostProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Trending posts={posts} />
      <Trending posts={posts} />
      {/* <Posts posts={posts} /> */}
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
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
