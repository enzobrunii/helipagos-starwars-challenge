import React from 'react'
import { render } from '@testing-library/react'
import StarshipDetail from '../../starships/[id]/page'
import EntityDetailPage from '../EntityDetailPage'

jest.mock('../EntityDetailPage', () => jest.fn(() => null))

describe('StarshipDetail', () => {
  it('renders EntityDetailPage with correct props', () => {
    render(<StarshipDetail />)
    expect(EntityDetailPage).toHaveBeenCalledWith(
      { category: 'starships', title: 'Starship' },
      {}
    )
  })
})

