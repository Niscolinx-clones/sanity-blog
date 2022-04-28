import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../containers/Main'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main/>
    </div>
  )
}

export default Home
