import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/svgs/logo.svg'
import HeroSvg from '../assets/svgs/heroSvg.svg'

function Header() {
  const elRef = useRef<undefined | null | number>(null)
  const [height, setHeight] = useState<number>()

  const getHeightSize = () => {
    const calHeight = window.document.querySelector('.header__height')

    elRef.current = calHeight?.clientHeight
    setHeight(elRef.current)
  }

  useEffect(() => {
    getHeightSize()
  }, [height])

  useEffect(() => {
    window.addEventListener('resize', getHeightSize)
  })

  return (
    <header className="grid-cols-18 header__height col-span-full grid">
      <div className="-z-1 absolute left-0 w-screen bg-[#febf17]" style={{height}}></div>

      <div className="col-end-18 col-start-2 grid">
        <div className="flex items-center justify-between py-5">
          <div>
            <Link href="/">
              <Logo className="text-sm" />
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

      <hr className="col-span-full border-black w-full absolute left-0 top-20" />
      <div className="grid-cols-18 relative col-span-full grid overflow-hidden">
        <div className="col-start-2 col-end-[-1] grid  items-center justify-between py-24 ">
          <div className="space-y-5 pr-6">
            <h2 className="font-serif text-7xl tracking-tighter md:text-[95px] lg:text-[106px] lg:leading-[95px] ">
              Stay curious.
            </h2>
            <h3 className="w-4/5 py-4 text-2xl leading-6 text-[#292929] md:w-3/5">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h3>
            <button className="rounded-full bg-black py-2 px-12 text-xl text-white">
              Start reading
            </button>
          </div>
          <div className="absolute left-[420px] hidden w-[585px] md:block lg:right-0 lg:left-auto">
            <HeroSvg className="ml-16" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
