import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders login page by default', () => {
  render(<App />);
  const loginElement = screen.getByText(/login/i);
  expect(loginElement).toBeInTheDocument();
});

test('renders quiz instructions after login', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/login/i));
  const startQuizButton = screen.getByText(/start quiz/i);
  fireEvent.click(startQuizButton);
  const instructionsElement = screen.getByText(/quiz instructions/i);
  expect(instructionsElement).toBeInTheDocument();
});