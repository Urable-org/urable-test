import React from 'react';
import { render } from '@testing-library/react';
import AnimatedBackground from '../AnimatedBackground';

describe('AnimatedBackground', () => {
  test('renders without crashing', () => {
    render(<AnimatedBackground />);
  });
});
