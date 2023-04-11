import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Knob from '../components/Knob'

describe('Knob component', () => {
  it('renders without errors', () => {
    render(
      <Knob label="Test" value={0} setValue={() => null} min={0} max={0} />,
    )
    const titleElement = screen.getByText(/Test/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('renders knob label', () => {
    const label = 'Volume'
    const { getByText } = render(
      <Knob label={label} value={0} max={1} min={0} setValue={jest.fn()} />,
    )
    expect(getByText(label)).toBeInTheDocument()
  })

  test('clicking add button increases value by 5%', () => {
    const value = 0.5
    const max = 1.0
    const setValue = jest.fn()
    const { getByText } = render(
      <Knob
        label="Volume"
        value={value}
        setValue={setValue}
        max={max}
        min={0}
      />,
    )
    const addButton = getByText('+')
    fireEvent.click(addButton)
    expect(setValue).toHaveBeenCalledWith(value + 0.05 * max)
  })

  test('clicking minus button decreases value by 5%', () => {
    const value = 0.5
    const min = 0
    const max = 1
    const setValue = jest.fn()
    const { getByText } = render(
      <Knob
        label="Volume"
        value={value}
        setValue={setValue}
        min={min}
        max={max}
      />,
    )
    const minusButton = getByText('-')
    fireEvent.click(minusButton)
    expect(setValue).toHaveBeenCalledWith(value - 0.05)
  })

  it('does not error when unmounted', () => {
    const { unmount } = render(
      <Knob label="Test" value={0} setValue={() => null} min={0} max={0} />,
    )
    expect(() => {
      unmount()
    }).not.toThrow()
  })
})
