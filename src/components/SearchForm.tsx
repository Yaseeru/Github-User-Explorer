import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getUser, getRepos } from '../utils/api';

const SearchForm = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addToCache } = useAppContext();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // prevent page reload
    setError(null);

    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    try {
      // fetch user + repos
      const user = await getUser(username);
      const repos = await getRepos(username);

      // store in context cache
      addToCache(username, { user, repos });

      // navigate to profile page
      navigate(`/${username.toLowerCase()}`);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="border p-2 rounded w-64"
        aria-label="GitHub username input"
      />
      <button
        type="submit"
        disabled={!username.trim()}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Search
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default SearchForm;
