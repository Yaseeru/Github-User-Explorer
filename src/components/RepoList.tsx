import type { Repo } from '../types';
import { useMemo } from 'react';

interface Props { repos: Repo[] }

const RepoList = ({ repos }: Props) => {
  const sortedRepos = useMemo(
    () =>
      [...repos]
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 5), // 👈 Limit to 5
    [repos]
  );

  if (sortedRepos.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <ul className="space-y-4" role="list">
      {sortedRepos.map((repo) => (
        <li key={repo.id} className="border p-4 rounded">
          <h3 className="font-semibold">{repo.name}</h3>
          <p>{repo.description || 'No description'}</p>
          <p>⭐ {repo.stargazers_count}</p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Repo
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
