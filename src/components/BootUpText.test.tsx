import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import BootUpText from './BootUpText'

describe('Boot Up Text component', () => {
  test('renders bootup text', () => {
    render(<BootUpText textColor={204} bootTime={4000} />)
    expect(screen.getByTestId('bootup')).toBeInTheDocument()
  })

  test('renders all bootup texts in sequence', async () => {
    jest.useFakeTimers()
    render(<BootUpText textColor={204} bootTime={4000} />)
    const bootUpText1 = await waitFor(() => screen.getByTestId('bootup-1'))
    expect(bootUpText1).toBeInTheDocument()
    const bootUpText2 = await waitFor(() => screen.getByTestId('bootup-2'))
    expect(bootUpText2).toBeInTheDocument()
    const bootUpText3 = await waitFor(() => screen.getByTestId('bootup-3'))
    expect(bootUpText3).toBeInTheDocument()
    const bootUpText4 = await waitFor(() => screen.getByTestId('bootup-4'))
    expect(bootUpText4).toBeInTheDocument()
  })

  it('does not error when unmounted', () => {
    const { unmount } = render(<BootUpText textColor={204} bootTime={4000} />)
    expect(() => {
      unmount()
    }).not.toThrow()
  })
})
