import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Trending from '../components/Trending'
import { sanityClient } from '../sanity'


const Home: NextPage = () => {
  return (
    <div className="grid-cols-18  mx-auto grid w-full max-w-7xl">
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Trending />
      <Posts/>
    </div>
  )
}

export default Home


