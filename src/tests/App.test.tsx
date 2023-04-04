import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('renders without errors', () => {
    render(<App />)
    const appElement = screen.getByTestId('app')
    expect(appElement).toBeInTheDocument()
  })

  it('renders the correct welcome', () => {
    render(<App />)
    const titleElement = screen.getByText(/WELCOME/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the list hint', () => {
    render(<App />)
    const titleElement = screen.getByText(/list/i)
    expect(titleElement).toBeInTheDocument()
  })
})
