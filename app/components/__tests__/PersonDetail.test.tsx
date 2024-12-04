import React from 'react'
import { render } from '@testing-library/react'
import PersonDetail from '../../people/[id]/page'
import EntityDetailPage from '../EntityDetailPage'

jest.mock('../EntityDetailPage', () => jest.fn(() => null))

describe('PersonDetail', () => {
  it('renders EntityDetailPage with correct props', () => {
    render(<PersonDetail />)
    expect(EntityDetailPage).toHaveBeenCalledWith(
      { category: 'people', title: 'Person' },
      {}
    )
  })
})

