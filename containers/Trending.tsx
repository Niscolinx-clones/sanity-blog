import React from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'

function Trending() {
  return (
    <div>
      <header className='flex'>
        <TrendingSvg/>
        
        <p>TRENDING ON MEDIUM</p>
      </header>
    </div>
  )
}

export default Trending