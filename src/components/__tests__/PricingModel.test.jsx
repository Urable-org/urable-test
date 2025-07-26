import React from 'react';
import { render, screen } from '@testing-library/react';
import PricingModel from '../PricingModel';

describe('PricingModel', () => {
  test('renders pricing plans', () => {
    render(<PricingModel />);
    expect(screen.getByText(/Basic/i)).toBeInTheDocument();
    expect(screen.getByText(/Pro/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise/i)).toBeInTheDocument();
  });
});
