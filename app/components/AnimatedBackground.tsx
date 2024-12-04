import React from 'react'

const AnimatedBackground: React.FC = () => {
  const generateStars = (count: number, speed: number, size: number, opacity: number) => (
    [...Array(count)].map((_, i) => (
      <div 
        key={`star-${speed}-${i}`} 
        className="star absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          animation: `twinkle 1s infinite, fall ${speed}s linear infinite`,
          animationDelay: `${Math.random() * speed}s`
        }}
      />
    ))
  )

  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none z-0">
      <div className="star-layer-1">
        {generateStars(50, 20, 2, 0.8)}
      </div>
      <div className="star-layer-2">
        {generateStars(30, 15, 3, 0.6)}
      </div>
      <div className="star-layer-3">
        {generateStars(20, 10, 4, 0.4)}
      </div>
      <div className="spaceship-field">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`ship-${i}`}
            className="spaceship absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fly ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground