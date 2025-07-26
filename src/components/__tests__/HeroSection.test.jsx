import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  test('renders welcome message', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Welcome to NeuroChain AI/i)).toBeInTheDocument();
  });
});
