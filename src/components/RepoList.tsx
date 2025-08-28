import type { Repo } from '../types';
import { useMemo } from 'react';

interface Props {
  repos: Repo[];
}

const RepoList = ({ repos }: Props) => {
  const sortedRepos = useMemo(() => {
    return [...repos].sort(
      (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
  }, [repos]);

  if (sortedRepos.length === 0) {
    return <p className="text-gray-500">No repositories found</p>;
  }

  return (
    <ul className="space-y-4">
      {sortedRepos.map((repo) => (
        <li key={repo.id} className="border p-4 rounded bg-white shadow">
          <h3 className="font-semibold">{repo.name}</h3>
          <p className="text-gray-600">{repo.description || 'No description'}</p>
          <p>⭐ {repo.stargazers_count}</p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Repo
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
