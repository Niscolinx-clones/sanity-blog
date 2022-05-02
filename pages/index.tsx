import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Trending from '../containers/Trending'

const Home: NextPage = () => {
  return (
    <div className="grid-cols-18 mx-auto grid w-full max-w-7xl">
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative contents">
        <Header />
        <div className="-z-1 absolute left-0 h-full w-screen bg-[#febf17]"></div>
      </div>
      <Trending />
    </div>
  )
}

export default Home
