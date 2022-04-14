import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex items-center justify-between border-y border-black bg-[#febf17] py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">Stay curious.</h1>
          <h2>
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <button className='bg-black text-white text-3xl py-3 px-4'>
            Start reading
          </button>
        </div>
     
        <img src="/heroSvg.svg" alt="" />
      </div>
    </div>
  )
}

export default Home
