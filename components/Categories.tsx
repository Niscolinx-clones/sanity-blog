import React from 'react'
import { categoryQuery } from '../typings'

function Categories({ categoryQuery }: categoryQuery) {
  return (
    <div>
      <p className="text-xs font-bold uppercase mb-4">
        Discover more of what matters to you
      </p>

      <ul className="flex list-none flex-wrap gap-2 max-w-[20rem]">
        {categoryQuery.map((category, i) => {
          return (
            <li key={i} className="border p-2 flex text-sm text-gray-500 space-x-2">
              {category.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
