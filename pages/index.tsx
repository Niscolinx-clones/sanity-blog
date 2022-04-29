import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Trending from '../containers/Trending'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium Blogn Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Trending/>
    </div>
  )
}

export default Home
