import React from 'react'
import { render, screen } from '@testing-library/react'
import EntityListPage from '../EntityListPage'
import { useSwapi } from '../../hooks/useSwapi'

// Mock the hooks and components used in EntityListPage
jest.mock('../../hooks/useSwapi')
jest.mock('../Navigation', () => () => <div data-testid="navigation" />)
jest.mock('../Logo', () => () => <div data-testid="logo" />)
jest.mock('../SearchBar', () => ({ onSearch }: { onSearch: () => void }) => (
  <div data-testid="search-bar" onClick={() => onSearch()} />
))
jest.mock('../List', () => ({ items }: { items: any[] }) => (
  <div data-testid="list">{items.length} items</div>
))

describe('EntityListPage', () => {
  beforeEach(() => {
    (useSwapi as jest.Mock).mockReturnValue({
      data: [{ name: 'Test Entity', url: 'http://test.com' }],
      loading: false,
      error: null,
      search: jest.fn(),
      loadMore: jest.fn(),
      hasMore: false,
    })
  })

  it('renders the correct title', () => {
    render(<EntityListPage title="Test Title" category="people" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders all necessary components', () => {
    render(<EntityListPage title="Test Title" category="people" />)
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('search-bar')).toBeInTheDocument()
    expect(screen.getByTestId('list')).toBeInTheDocument()
  })

  it('displays loading state when loading and no data', () => {
    (useSwapi as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: null,
      search: jest.fn(),
      loadMore: jest.fn(),
      hasMore: false,
    })
    render(<EntityListPage title="Test Title" category="people" />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('displays error message when there is an error', () => {
    (useSwapi as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: 'Test error',
      search: jest.fn(),
      loadMore: jest.fn(),
      hasMore: false,
    })
    render(<EntityListPage title="Test Title" category="people" />)
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })
})

