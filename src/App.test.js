import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero and navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /iheb ncir/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'SkillBridge' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view skillbridge live project/i })).toHaveAttribute('href', 'https://kaleidoscopic-parfait-dbaf5a.netlify.app/');
});

test('uses the canonical name and hides certificate credential IDs', () => {
  render(<App />);

  const nameMatches = screen.getAllByText('Iheb Ncir');
  expect(nameMatches.length).toBeGreaterThan(0);
  expect(screen.queryByText(/ID:\s*[0-9a-f-]{8,}/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/date not provided/i)).not.toBeInTheDocument();
});
