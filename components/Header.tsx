import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="w-full bg-[#febf17] ">
        <div className="flex items-center justify-between py-5 ml-24">
          <div>
            <Link href="/">
              <img
                src="https://links.papareact.com/yvf"
                alt=""
                className="w-44 cursor-pointer object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center  text-sm font-light text-black space-x-5">
            <h3>Our story</h3>
            <h3>Membership</h3>
            <h3>Write</h3>
            <h3>Sign In</h3>
            <h3 className="rounded-full bg-black px-4 py-3 text-white">
              Get Started
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between border-y border-black bg-[#febf17] py-10 lg:py-0">
          <div className="space-y-5 ml-24">
            <h2
              className="font-serif lg:tracking-tighter"
              style={{ fontSize: '106px', lineHeight: '95px' }}
            >
              Stay curious.
            </h2>
            <h3 className="text-2xl text-[#292929] md:w-[500px] lg:w-[550px]">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h3>
            <button className="bg-black py-3 px-4 text-3xl text-white">
              Start reading
            </button>
          </div>
          <img src="/heroSvg.svg" alt="" />
        </div>
      
    </header>
  )
}

export default Header
