import React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from '../Logo'

describe('Logo', () => {
  it('renders the Star Wars title', () => {
    render(<Logo />)
    const titleElement = screen.getByText('STAR WARS')
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the 8-bit Explorer subtitle', () => {
    render(<Logo />)
    const subtitleElement = screen.getByText('8-bit Explorer')
    expect(subtitleElement).toBeInTheDocument()
  })

  it('applies the correct CSS classes', () => {
    render(<Logo />)
    const titleElement = screen.getByText('STAR WARS')
    const subtitleElement = screen.getByText('8-bit Explorer')

    expect(titleElement).toHaveClass('text-6xl', 'font-bold', 'pixel-text', 'text-yellow-400', 'animate-pulse')
    expect(subtitleElement).toHaveClass('text-2xl', 'pixel-text', 'text-blue-400', 'animate-bounce')
  })
})

