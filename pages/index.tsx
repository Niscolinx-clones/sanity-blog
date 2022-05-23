import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Trending from '../components/Trending'
import { sanityClient } from '../sanity'
import { IndexProps } from '../typings'

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
      publishedAt,
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

  const category_query = `*[_type == 'category']{
title
}`

  const posts = await sanityClient.fetch(post_query)
  const trending = await sanityClient.fetch(trending_query)
  const categoryQuery = await sanityClient.fetch(category_query)

  return {
    props: {
      posts,
      trending,
      categoryQuery,
    },
  }
}

const Home: NextPage<IndexProps> = ({ trending, posts, categoryQuery }) => {
  console.log({ categoryQuery })
  return (
    <>
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Trending trending={trending} />
      <div className="col-end-18 col-start-2 mt-10 grid ">
        <div className="grid grid-cols-[2fr,1fr]">
          <Posts posts={posts} />
          <div>
            <h3>DISCOVER MORE OF WHAT MATTERS TO YOU</h3>

            {categoryQuery.map((category, i) => {
              return <li key={i}>{category.title}</li>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
