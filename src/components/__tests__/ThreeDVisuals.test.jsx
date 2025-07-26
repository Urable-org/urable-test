import React from 'react';
import { render } from '@testing-library/react';
import ThreeDVisuals from '../ThreeDVisuals';

describe('ThreeDVisuals', () => {
  test('renders without crashing', () => {
    render(<ThreeDVisuals />);
  });
});
