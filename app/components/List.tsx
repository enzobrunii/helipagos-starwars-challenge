import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

interface ListProps {
  items: any[]
  category: 'people' | 'planets' | 'starships'
  onLoadMore: () => void
  hasMore: boolean
}

const List: React.FC<ListProps> = ({ items, category, onLoadMore, hasMore }) => {
  const observerTarget = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore()
        }
      },
      { threshold: 1.0 }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [onLoadMore, hasMore])

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
      {hasMore && (
        <div ref={observerTarget} className="text-center py-4">
          <span className="pixel-text text-yellow-400 synchronized-blink">Loading more...</span>
        </div>
      )}
    </div>
  )
}

export default List

