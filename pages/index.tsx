import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Trending from '../containers/Trending'


const Home: NextPage = () => {
  return (
    <div className="grid w-full grid-cols-18">
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Trending />
    </div>
  )
}

export default Home
