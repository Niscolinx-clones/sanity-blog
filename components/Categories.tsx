import React from 'react'
import { categoryQuery } from '../typings'

function Categories({ categoryQuery}: categoryQuery) {
  return (
    <div>
      <h3>DISCOVER MORE OF WHAT MATTERS TO YOU</h3>

      {categoryQuery.map((category, i) => {
        return <li key={i}>{category.title}</li>
      })}
    </div>
  )
}

export default Categories