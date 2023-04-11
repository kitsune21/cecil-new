import React from 'react'
import { render, screen } from '@testing-library/react'
import WelcomeText from './WelcomeText'

describe('Welcome Text component', () => {
  it('renders without errors', () => {
    render(<WelcomeText textColor={204} />)
    const titleElement = screen.getByText(/CECIL/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('does not error when unmounted', () => {
    const { unmount } = render(<WelcomeText textColor={204} />)
    expect(() => {
      unmount()
    }).not.toThrow()
  })
})
