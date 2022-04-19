import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="grid-cols-18 grid w-full bg-[#febf17] ">
      <div className="col-end-18 col-start-2 grid">
        <div className="flex items-center justify-between py-5 ">
          <div>
            <Link href="/">
              <img
                src="https://links.papareact.com/yvf"
                alt=""
                className="-ml-2 w-44 cursor-pointer object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center  space-x-5 text-sm font-light text-black">
            <h3>Our story</h3>
            <h3>Membership</h3>
            <h3>Write</h3>
            <h3>Sign In</h3>
            <h3 className="rounded-full bg-black px-4 py-3 text-white">
              Get Started
            </h3>
          </div>
        </div>
      </div>
      <hr className="col-span-full border-black" />
      <div className="col-[2/-1] grid relative overflow-hidden">
        <div className="col-span-full flex items-center justify-between  bg-[#febf17] py-24">
          <div className="space-y-5">
            <h2 className="font-serif leading-[95px] text-6xl md:text-[95px] lg:text-[106px] lg:tracking-tighter ">
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
          <div className="hidden absolute w-[585px] left-[420px] lg:right-0 lg:left-auto md:block">

          <img src="/heroSvg.svg" alt="" className='ml-16'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
