import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Trending from '../containers/Trending'

const Home: NextPage = () => {
  const elRef = useRef()
  useEffect(() => {
    const calHeight = window.document.querySelector('.header__height')

    console.log('calheight', calHeight?.clientHeight)
  })

  useEffect(() => {
    console.log('the ref', elRef.current)
  })
  return (
    <div className="grid-cols-18 header__height mx-auto grid w-full max-w-7xl">
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative contents">
        <Header getHeight/>
        <div className="-z-1 absolute left-0 h-[37%] w-screen bg-[#febf17]"></div>
      </div>
      <Trending />
    </div>
  )
}

export default Home
