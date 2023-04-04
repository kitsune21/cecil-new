import React from 'react'
import { render, screen } from '@testing-library/react'
import BootUpText from './BootUpText'

describe('Boot Up Text component', () => {
  it('renders without errors', () => {
    render(<BootUpText textColor={204} bootTime={5000} />)
    const titleElement = screen.getByTestId('bootup')
    expect(titleElement).toBeInTheDocument()
  })
})
