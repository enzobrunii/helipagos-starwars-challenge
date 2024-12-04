import React from 'react'
import { render } from '@testing-library/react'
import PlanetDetail from '../../planets/[id]/page'
import EntityDetailPage from '../EntityDetailPage'

jest.mock('../EntityDetailPage', () => jest.fn(() => null))

describe('PlanetDetail', () => {
  it('renders EntityDetailPage with correct props', () => {
    render(<PlanetDetail />)
    expect(EntityDetailPage).toHaveBeenCalledWith(
      { category: 'planets', title: 'Planet' },
      {}
    )
  })
})

