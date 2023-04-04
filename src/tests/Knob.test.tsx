import React from 'react';
import { render, screen } from '@testing-library/react';
import Knob from '../components/Knob';

describe('Knob component', () => {
    it('renders without errors', () => {
      render(<Knob label='Test' value={0} setValue={() => null} min={0} max={0}/>)
      const titleElement = screen.getByText(/Test/i);
      expect(titleElement).toBeInTheDocument();
    })
  })