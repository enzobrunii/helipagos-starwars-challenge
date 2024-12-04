'use client'

import { useState } from 'react'
import Logo from './components/Logo'
import Link from 'next/link'
import StarWarsIntro from './components/StarWarsIntro'
import { useAuth } from './context/HelipagosAuthContext'

export default function Home() {
  const { isAuthenticated } = useAuth()
  const [selectedOption, setSelectedOption] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  const menuOptions = [
    { label: 'Explore People', href: '/people' },
    { label: 'Explore Planets', href: '/planets' },
    { label: 'Explore Starships', href: '/starships' },
    { label: isAuthenticated ? 'Logout' : 'Login', href: '/login' },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {showIntro ? (
          <StarWarsIntro onComplete={() => setShowIntro(false)} />
        ) : (
          <>
            <Logo />
            <div className="mt-8 w-full max-w-md">
              <div className="pixel-borders p-4 bg-black bg-opacity-80">
                {!isAuthenticated && (
                  <p className="text-yellow-400 pixel-text mb-4 text-center">Hello, Jedi Padawan! Ready to explore the galaxy?</p>
                )}
                <ul className="space-y-4">
                  {menuOptions.map((option, index) => (
                    <li key={option.label}>
                      <Link href={option.href} 
                            className={`block px-6 py-3 bg-black text-yellow-400 hover:bg-yellow-900 transition-colors pixel-borders ${
                              selectedOption === index ? 'bg-yellow-900' : ''
                            }`}
                            onMouseEnter={() => setSelectedOption(index)}>
                        <span className="pixel-text">
                          {selectedOption === index ? '► ' : '  '}
                          {option.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

