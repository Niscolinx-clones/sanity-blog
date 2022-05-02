import type { NextPage } from 'next'
import { useState, useRef, useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Trending from '../containers/Trending'

//const calHeight = window.document.querySelector('.header__height')
const Home: NextPage = () => {

  //console.log('calheight', calHeight.offsetWidth())

  useEffect(() => {
        window.addEventListener('resize', (size:UIEvent) => {
          console.log('window resized', size)
        })

  })
  return (
    <div className="grid-cols-18 mx-auto grid w-full max-w-7xl">
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative contents header__height">
        <Header/>
        <div className="-z-1 absolute left-0 h-[37%] w-screen bg-[#febf17]"></div>
      </div>
      <Trending />
    </div>
  )
}

export default Home
