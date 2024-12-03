import React from 'react'
import Link from 'next/link'

interface ListProps {
  items: any[]
  category: 'people' | 'planets' | 'starships'
}

const List: React.FC<ListProps> = ({ items, category }) => {
  return (
    <div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.url} className="bg-black p-4 pixel-borders hover:bg-yellow-900 transition-colors">
            <Link href={`/${category}/${item.url.split('/').slice(-2, -1)[0]}`} className="text-yellow-400 hover:text-white transition-colors block">
              <span className="pixel-text">{item.name}</span>
              <span className="float-right synchronized-blink text-yellow-400">►</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List

