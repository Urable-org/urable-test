import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialsCarousel from '../TestimonialsCarousel';

describe('TestimonialsCarousel', () => {
  test('renders testimonials', () => {
    render(<TestimonialsCarousel />);
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
  });
});
