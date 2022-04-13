import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <div className='flex space-x-5 items-center'>
        <div>
          <Link href="/">
            <img
              src="https://links.papareact.com/yvf"
              alt=""
              className="w-44 cursor-pointer object-contain"
            />
          </Link>
        </div>
        <div className='hidden md:inline-flex items-center space-x-5'>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
        </div>
        <div></div>
      </div>
    </header>
  )
}

export default Header
