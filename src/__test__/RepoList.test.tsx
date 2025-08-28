// src/__tests__/RepoList.test.tsx
import { render, screen } from '@testing-library/react';
import RepoList from '../components/RepoList';

test('renders no repos message when empty', () => {
  render(<RepoList repos={[]} />);
  expect(screen.getByText(/no repositories found/i)).toBeInTheDocument();
});

test('renders repos sorted by updated_at (newest first)', () => {
  const now = new Date();
  const older = new Date(now.getTime() - 1000 * 60 * 60); // 1 hour older

  const repos = [
    { id: 1, name: 'older-repo', description: null, stargazers_count: 0, html_url: 'a', updated_at: older.toISOString() },
    { id: 2, name: 'newer-repo', description: 'd', stargazers_count: 5, html_url: 'b', updated_at: now.toISOString() },
  ] as any;

  render(<RepoList repos={repos} />);

  const headings = screen.getAllByRole('heading');
  // Expect the first rendered heading to be the newer repo
  expect(headings[0]).toHaveTextContent('newer-repo');
  expect(headings[1]).toHaveTextContent('older-repo');
});
