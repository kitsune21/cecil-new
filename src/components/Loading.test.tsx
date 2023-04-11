import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Loading from './Loading'

describe('Loading', () => {
  it('renders a loading icon', async () => {
    render(<Loading time={500} id={1} />)
    const loadingIcon = await waitFor(() => screen.getByText('|'))
    expect(loadingIcon).toBeInTheDocument()
  })

  it('changes the icon as expected', async () => {
    render(<Loading time={500} id={1} />)
    await waitFor(() => {
      expect(screen.getByText('/')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText('-')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText('|')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText('\\')).toBeInTheDocument()
    })
  })

  it('removes the loading icon when finished', async () => {
    render(<Loading time={500} id={1} />)
    const loadingIcon = await waitFor(() => screen.getByText('|'))
    await waitFor(() => {
      expect(screen.queryByText('|')).toBeNull()
    })
    expect(loadingIcon).toBeInTheDocument()
  })

  it('does not error when unmounted', () => {
    const { unmount } = render(<Loading time={500} id={1} />)
    expect(() => {
      unmount()
    }).not.toThrow()
  })
})
