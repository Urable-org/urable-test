import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WalletIntegration from '../WalletIntegration';

describe('WalletIntegration', () => {
  test('renders connect wallet button', () => {
    render(<WalletIntegration />);
    expect(screen.getByText(/Connect Wallet/i)).toBeInTheDocument();
  });

  test('displays connected wallet address', async () => {
    window.ethereum = {
      request: jest.fn().mockResolvedValue(['0x1234567890abcdef'])
    };
    render(<WalletIntegration />);
    fireEvent.click(screen.getByText(/Connect Wallet/i));
    expect(await screen.findByText(/Connected Wallet: 0x1234567890abcdef/i)).toBeInTheDocument();
  });
});
