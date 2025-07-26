import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureCards from '../FeatureCards';

describe('FeatureCards', () => {
  test('renders feature cards', () => {
    render(<FeatureCards />);
    expect(screen.getByText(/Real-time Analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/Audit Optimization/i)).toBeInTheDocument();
    expect(screen.getByText(/Smart Contract Auditing/i)).toBeInTheDocument();
  });
});
