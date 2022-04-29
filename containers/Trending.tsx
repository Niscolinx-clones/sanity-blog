import React from 'react'
import TrendingSvg from '../assets/svgs/trending.svg'

function Trending() {
  return (
    <div className="col-start-2 col-end-18 grid bg-blue-800">
      <header className="flex">
        <TrendingSvg />
        <p>TRENDING ON MEDIUM</p>
      </header>
    </div>
  )
}

export default Trending