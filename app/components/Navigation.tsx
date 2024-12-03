'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="bg-black text-yellow-400 p-4 pixel-borders mb-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold pixel-text mb-4 sm:mb-0">Star Wars 8-bit</Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link 
              href="/people" 
              className={`hover:text-white transition-colors ${isActive('/people') ? 'underline' : ''}`}
            >
              People
            </Link>
          </li>
          <li>
            <Link 
              href="/planets" 
              className={`hover:text-white transition-colors ${isActive('/planets') ? 'underline' : ''}`}
            >
              Planets
            </Link>
          </li>
          <li>
            <Link 
              href="/starships" 
              className={`hover:text-white transition-colors ${isActive('/starships') ? 'underline' : ''}`}
            >
              Starships
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

