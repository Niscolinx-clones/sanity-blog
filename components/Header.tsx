import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="bg-[#febf17]">
      <div className="flex justify-between max-w-6xl mx-auto py-5">
        <div className="flex items-center space-x-5">
          <div>
            <Link href="/">
              <img
                src="https://links.papareact.com/yvf"
                alt=""
                className="w-44 cursor-pointer object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-sm font-light text-black">
          <h3>Our story</h3>
          <h3>Membership</h3>
          <h3>Write</h3>
          <h3>Sign In</h3>
          <h3 className="rounded-full text-white bg-black px-4 py-3">
            Get Started
          </h3>
        </div>
      </div>
    </header>
  ) 
}

export default Header
