import React from 'react'
import { render, screen } from '@testing-library/react'
import DetailView from '../DetailView'

describe('DetailView', () => {
  const mockData = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/'
  }

  it('renders the title', () => {
    render(<DetailView title="Character Details" data={mockData} />)
    expect(screen.getByText('Character Details')).toBeInTheDocument()
  })

  it('renders all data fields except excluded ones', () => {
    render(<DetailView title="Character Details" data={mockData} excludeFields={['created', 'edited', 'url']} />)
    expect(screen.getByText('name:')).toBeInTheDocument()
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
    expect(screen.getByText('height:')).toBeInTheDocument()
    expect(screen.getByText('172')).toBeInTheDocument()
    expect(screen.queryByText('created:')).not.toBeInTheDocument()
    expect(screen.queryByText('edited:')).not.toBeInTheDocument()
    expect(screen.queryByText('url:')).not.toBeInTheDocument()
  })

  it('renders a link for homeworld', () => {
    render(<DetailView title="Character Details" data={mockData} />)
    const homeworldLink = screen.getByText('View Homeworld')
    expect(homeworldLink).toBeInTheDocument()
    expect(homeworldLink).toHaveAttribute('href', '/planets/1')
  })

  it('renders "No data available" when data is null', () => {
    render(<DetailView title="Character Details" data={null} />)
    expect(screen.getByText('No data available')).toBeInTheDocument()
  })
})

