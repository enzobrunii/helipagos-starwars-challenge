import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SearchBar from '../SearchBar'

describe('SearchBar', () => {
  it('should render an input field', () => {
    render(<SearchBar onSearch={() => {}} />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('should call onSearch with input value when form is submitted', () => {
    const mockOnSearch = jest.fn()
    render(<SearchBar onSearch={mockOnSearch} />)

    const input = screen.getByPlaceholderText('Search...')
    fireEvent.change(input, { target: { value: 'Luke' } })
    fireEvent.submit(input)

    expect(mockOnSearch).toHaveBeenCalledWith('Luke')
  })

  it('should clear input after form submission', () => {
    render(<SearchBar onSearch={() => {}} />)

    const input = screen.getByPlaceholderText('Search...')
    fireEvent.change(input, { target: { value: 'Luke' } })
    fireEvent.submit(input)

    expect(input).toHaveValue('')
  })
})

