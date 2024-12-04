import React from 'react';
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Navigation from '../Navigation';
import { useHelipagosAuth } from '../../hooks/useHelipagosAuth';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Mock the useHelipagosAuth hook
jest.mock('../../hooks/useHelipagosAuth', () => ({
  useHelipagosAuth: jest.fn(),
}));

describe('Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks to avoid interference
    (usePathname as jest.Mock).mockReturnValue('/');
    (useHelipagosAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      logout: jest.fn(),
    });
  });

  it('renders the logo and navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Star Wars 8-bit')).toBeInTheDocument();
    expect(screen.getByText('People')).toBeInTheDocument();
    expect(screen.getByText('Planets')).toBeInTheDocument();
    expect(screen.getByText('Starships')).toBeInTheDocument();
  });

  it('highlights the active link', () => {
    (usePathname as jest.Mock).mockReturnValue('/people');
    render(<Navigation />);
    const peopleLink = screen.getByText('People');
    expect(peopleLink).toHaveClass('underline'); // Updated to match the correct active class
  });

  it('renders login button when user is not authenticated', () => {
    render(<Navigation />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders logout button when user is authenticated', () => {
    (useHelipagosAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: jest.fn(),
    });
    render(<Navigation />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('calls the logout function when the logout button is clicked', () => {
    const mockLogout = jest.fn();
    (useHelipagosAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: mockLogout,
    });
    render(<Navigation />);
    const logoutButton = screen.getByText('Logout');
    logoutButton.click();
    expect(mockLogout).toHaveBeenCalled();
  });
});
