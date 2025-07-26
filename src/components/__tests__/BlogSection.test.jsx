import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogSection from '../BlogSection';

describe('BlogSection', () => {
  test('renders blog posts', () => {
    render(<BlogSection />);
    expect(screen.getByText(/Understanding Smart Contract Auditing/i)).toBeInTheDocument();
    expect(screen.getByText(/Optimizing Smart Contracts for Performance/i)).toBeInTheDocument();
  });
});
