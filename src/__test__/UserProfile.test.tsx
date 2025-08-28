// src/__tests__/UserProfile.test.tsx
import { render, screen } from '@testing-library/react';
import UserProfile from '../components/UserProfile';

test('renders user profile details', () => {
  const user = {
    login: 'alice',
    avatar_url: 'https://example.com/a.png',
    bio: 'Hello world',
    followers: 42,
    html_url: 'https://github.com/alice',
  } as any;

  render(<UserProfile user={user} />);

  expect(screen.getByAltText("alice's avatar")).toBeInTheDocument();
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  expect(screen.getByText(/followers: 42/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view on github/i })).toHaveAttribute('href', 'https://github.com/alice');
});
