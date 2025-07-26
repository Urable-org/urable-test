import { render, screen } from '@testing-library/react';
import NewComponent from '../../src/components/NewComponent';

describe('NewComponent', () => {
  it('renders the component with correct text', () => {
    render(<NewComponent />);
    expect(screen.getByText('New Component')).toBeInTheDocument();
    expect(screen.getByText('This is a new component.')).toBeInTheDocument();
  });
});