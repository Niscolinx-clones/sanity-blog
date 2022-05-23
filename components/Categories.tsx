import React from 'react'
import { categoryQuery } from '../typings'

function Categories({ categoryQuery }: categoryQuery) {
  return (
    <div>
      <p className="text-xs font-bold uppercase">
        Discover more of what matters to you
      </p>

      <ul className="flex list-none flex-wrap gap-y-2 max-w-[20rem]">
        {categoryQuery.map((category, i) => {
          return (
            <li key={i} className="border p-2 flex text-xs text-gray-600">
              {category.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
