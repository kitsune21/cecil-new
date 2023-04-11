import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('renders without errors', () => {
    render(<App />)
    const appElement = screen.getByTestId('app')
    expect(appElement).toBeInTheDocument()
  })

  it('does not error when unmounted', () => {
    const { unmount } = render(<App />)
    expect(() => {
      unmount()
    }).not.toThrow()
  })
})
