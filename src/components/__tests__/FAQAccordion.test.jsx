import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQAccordion from '../FAQAccordion';

describe('FAQAccordion', () => {
  test('renders FAQ items', () => {
    render(<FAQAccordion />);
    expect(screen.getByText(/What is NeuroChain AI?/i)).toBeInTheDocument();
    expect(screen.getByText(/How does NeuroChain AI work?/i)).toBeInTheDocument();
  });

  test('toggles FAQ answers', () => {
    render(<FAQAccordion />);
    const question = screen.getByText(/What is NeuroChain AI?/i);
    fireEvent.click(question);
    expect(screen.getByText(/NeuroChain AI is a Web3-native AI platform that uses machine learning to analyze, audit, and optimize smart contracts in real time./i)).toBeInTheDocument();
  });
});
