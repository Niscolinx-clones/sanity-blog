import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between bg-[#febf17] p-5">
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
      <div className="flex items-center space-x-5 text-black font-light">
        <h3>Our Story</h3>
        <h3>Membership</h3>
        <h3>Write</h3>
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  ) 
}

export default Header
