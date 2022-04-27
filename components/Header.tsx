import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="grid w-full grid-cols-18 bg-[#febf17] border border-b border-black">
      <div className="col-start-2 col-end-18 grid">
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
          <div className="flex items-center  space-x-5 text-sm font-light text-black bg-green-400:not(:last)">
            <h3>Our story</h3>
            <h3>Membership</h3>
            <h3>Write</h3>
            <h3>Sign In</h3>
            <h3 className="rounded-full bg-black px-5 py-3 text-white">
              Get Started
            </h3>
          </div>
        </div>
      </div>
      <hr className="col-span-full border-black" />
      <div className="relative col-[2/-1] grid overflow-hidden">
        <div className="col-span-full flex items-center justify-between  bg-[#febf17] py-24">
          <div className="space-y-5 pr-6 ">
            <h2 className="font-serif text-7xl tracking-tighter md:text-[95px] lg:text-[106px] lg:leading-[95px] ">
              Stay curious.
            </h2>
            <h3 className="text-2xl text-[#292929] md:w-[500px] lg:w-[550px]">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h3>
            <button className="bg-black py-2 px-8 text-xl text-white rounded-full">
              Start reading
            </button>
          </div>
          <div className="absolute left-[420px] hidden w-[585px] md:block lg:right-0 lg:left-auto">
            <img src="/heroSvg.svg" alt="" className="ml-16" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
