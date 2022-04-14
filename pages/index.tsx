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
          <h1 className="max-w-xl font-serif text-6xl">
           
            is a place to write, read, and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers
          </h2>
        </div>
        {/* <img src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" className='hidden md:inline-flex h-32 lg:h-full' /> */}
        <img src="/heroSvg.svg" alt="" />
        
      </div>
    </div>
  )
}

export default Home
