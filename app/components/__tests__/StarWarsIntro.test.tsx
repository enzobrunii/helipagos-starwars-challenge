import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import StarWarsIntro from '../StarWarsIntro'

jest.useFakeTimers()

describe('StarWarsIntro', () => {
  it('renders the intro text', () => {
    render(<StarWarsIntro onComplete={() => {}} />)
    expect(screen.getByText('Episode I')).toBeInTheDocument()
    expect(screen.getByText('Technical Test')).toBeInTheDocument()
    expect(screen.getByText(/A long time ago, in a galaxy very, very near.../)).toBeInTheDocument()
  })

  it('renders the skip button', () => {
    render(<StarWarsIntro onComplete={() => {}} />)
    expect(screen.getByText('Skip')).toBeInTheDocument()
  })

  it('calls onComplete when skip button is clicked', () => {
    const mockOnComplete = jest.fn()
    render(<StarWarsIntro onComplete={mockOnComplete} />)
    fireEvent.click(screen.getByText('Skip'))
    expect(mockOnComplete).toHaveBeenCalledTimes(1)
  })

  it('calls onComplete after 120 seconds', () => {
    const mockOnComplete = jest.fn()
    render(<StarWarsIntro onComplete={mockOnComplete} />)
    act(() => {
      jest.advanceTimersByTime(120000)
    })
    expect(mockOnComplete).toHaveBeenCalledTimes(1)
  })

  it('applies the correct CSS classes', () => {
    render(<StarWarsIntro onComplete={() => {}} />)
    const introElement = screen.getByTestId('star-wars-intro')
    expect(introElement).toHaveClass('star-wars-intro', 'w-full', 'h-full')
  })

  it('renders the correct number of paragraphs', () => {
    render(<StarWarsIntro onComplete={() => {}} />)
    const paragraphs = screen.getAllByTestId('intro-paragraph')
    expect(paragraphs.length).toBe(8) // Adjust this number based on your actual intro text
  })
})

