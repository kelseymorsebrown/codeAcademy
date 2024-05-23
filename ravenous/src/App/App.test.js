import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ravenous header', () => {
  render(<App />);
  const header = screen.getByText(/Ravenous/i);
  expect(header).toBeInTheDocument();
});

test('renders "Best Match" filter', () => {
  render(<App />);
  const filter = screen.getByText(/Best Match/i);
  expect(filter).toBeInTheDocument();
});

test('renders "Highest Rated" filter', () => {
  render(<App />);
  const filter = screen.getByText(/Highest Rated/i);
  expect(filter).toBeInTheDocument();
});

test('renders "Most Reviewed" filter', () => {
  render(<App />);
  const filter = screen.getByText(/Most Reviewed/i);
  expect(filter).toBeInTheDocument();
});

test('renders "Lets Go" button', () => {
  render(<App />);
  const button = screen.getByText(/Let's Go/i);
  expect(button).toBeInTheDocument();
});
