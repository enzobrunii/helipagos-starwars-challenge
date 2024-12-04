'use client'

import { useEffect } from 'react'

interface StarWarsIntroProps {
  onComplete: () => void
}

const introText = `A long time ago, in a galaxy very, very near...

A young Jedi programmer faces their greatest challenge yet.

The Helipagos Council, guardians of modular and clean code, has entrusted the young Jedi with a critical mission: to build an application that reveals the secrets of the characters, planets, and ships of the mythical Star Wars galaxy.

Armed with tools and knowledge, they must connect to the legendary SWAPI to extract valuable data. But they are not alone in this mission: authentication with the Helipagos API will be their final test, where they must master the force of interceptors to ensure secure access.

On their path, they will face the challenges of building reusable components, unit tests covering more than 60% of their application, and a user interface worthy of a Jedi master.

The fate of their application depends on their ability to implement clean architecture patterns, master custom directives, and utilize a scalable design.

Will they manage to meet all the requirements and deliver the sacred repository before the deadline?

The future is in their hands.`

export default function StarWarsIntro({ onComplete }: StarWarsIntroProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 120000) // 120 seconds for the intro

    return () => {
      clearTimeout(timer)
    }
  }, [onComplete])

  const handleSkip = () => {
    onComplete()
  }

  return (
    <div className="absolute inset-0 bg-black z-50 overflow-hidden">
      <div data-testid="star-wars-intro" className="star-wars-intro w-full h-full font-size: 2.5vw;">
        <div className="crawl" style={{ animation: 'crawl 120s linear' }}>
          <div className="title">
            <p>Episode I</p>
            <h1>Technical Test</h1>
          </div>
          {introText.split('\n\n').map((paragraph, index) => (
            <p key={index} data-testid="intro-paragraph" className="mb-8">{paragraph}</p>
          ))}
        </div>
      </div>
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors pixel-borders"
      >
        Skip
      </button>
    </div>
  )
}