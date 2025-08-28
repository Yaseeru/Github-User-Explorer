// src/__tests__/SearchForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import SearchForm from '../components/SearchForm';

// mock navigation
const mockNavigate = vi.fn();

// mock the API module
vi.mock('../utils/api', () => ({
  getUser: vi.fn(),
  getRepos: vi.fn(),
}));

// override useNavigate but keep other react-router-dom exports
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

afterEach(() => {
  vi.clearAllMocks();
});

test('renders input and search button (disabled when empty)', () => {
  render(
    <AppProvider>
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    </AppProvider>
  );

  expect(screen.getByPlaceholderText(/enter github username/i)).toBeInTheDocument();
  // button initially disabled
  expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();
});

test('successful submit calls API and navigates', async () => {
  const api = (await import('../utils/api')) as any;
  const fakeUser = { login: 'testuser', avatar_url: 'a', bio: 'bio', followers: 1, html_url: 'h' };
  const fakeRepos = [{ id: 1, name: 'r1', description: 'd', stargazers_count: 0, html_url: 'hr', updated_at: new Date().toISOString() }];

  api.getUser.mockResolvedValue(fakeUser);
  api.getRepos.mockResolvedValue(fakeRepos);

  render(
    <AppProvider>
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    </AppProvider>
  );

  const input = screen.getByPlaceholderText(/enter github username/i);
  const button = screen.getByRole('button', { name: /search/i });

  await userEvent.type(input, 'testuser');
  expect(button).not.toBeDisabled();

  await userEvent.click(button);

  await waitFor(() => {
    expect(api.getUser).toHaveBeenCalledWith('testuser');
    expect(api.getRepos).toHaveBeenCalledWith('testuser');
    expect(mockNavigate).toHaveBeenCalledWith('/testuser');
  });
});

test('shows error message if API throws', async () => {
  const api = (await import('../utils/api')) as any;
  api.getUser.mockRejectedValue(new Error('User not found'));

  render(
    <AppProvider>
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    </AppProvider>
  );

  const input = screen.getByPlaceholderText(/enter github username/i);
  const button = screen.getByRole('button', { name: /search/i });

  await userEvent.type(input, 'no-such-user');
  await userEvent.click(button);

  const err = await screen.findByText(/user not found/i);
  expect(err).toBeInTheDocument();
});
