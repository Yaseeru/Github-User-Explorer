import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser, getRepos } from '../utils/api';
import { useAppContext } from '../context/AppContext';
import type { User, Repo } from '../types';
import UserProfile from '../components/UserProfile';
import RepoList from '../components/RepoList';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const { cachedUsers, addToCache } = useAppContext();

  const [data, setData] = useState<{ user: User; repos: Repo[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;
      const lowerUser = username.toLowerCase();

      // If cached, use it
      if (cachedUsers[lowerUser]) {
        setData(cachedUsers[lowerUser]);
        setLoading(false);
        return;
      }

      try {
        const user = await getUser(lowerUser);
        const repos = await getRepos(lowerUser);
        const result = { user, repos };
        setData(result);
        addToCache(lowerUser, result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, cachedUsers, addToCache]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!data) return <p className="text-center">No data available</p>;

  return (
    <div className="space-y-8">
      <UserProfile user={data.user} />
      <RepoList repos={data.repos} />
    </div>
  );
};

export default Profile;
