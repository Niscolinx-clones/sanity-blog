import Link from 'next/link'
import React from 'react'
import Logo from './logo.svg'

function Header() {
  return (
    <header className="grid w-full grid-cols-18 border border-b border-black bg-[#febf17]">
      <div className="col-start-2 col-end-18 grid">
        <div className="flex items-center justify-between py-5 ">
          <div>
            <Link href='/'>

              <Logo className='text-sm'/>
              </Link>
          </div>
          <div className="flex items-center space-x-5 text-sm font-light text-black">
            <div className="hidden space-x-5 lg:flex">
              <h3>Our story</h3>
              <h3>Membership</h3>
              <h3>Write</h3>
            </div>
            <div className="flex items-center space-x-5">
              <h3 className="hidden sm:flex">Sign In</h3>
              <h3 className="rounded-full bg-black px-5 py-3 text-white">
                Get Started
              </h3>
            </div>
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
            <h3 className="py-4 text-2xl leading-6 text-[#292929] md:w-[500px] lg:w-[550px]">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h3>
            <button className="rounded-full bg-black py-2 px-12 text-xl text-white">
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
