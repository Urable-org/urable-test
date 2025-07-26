import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  test('renders dashboard cards', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Smart Contracts/i)).toBeInTheDocument();
    expect(screen.getByText(/Audits/i)).toBeInTheDocument();
    expect(screen.getByText(/Optimization/i)).toBeInTheDocument();
  });
});
