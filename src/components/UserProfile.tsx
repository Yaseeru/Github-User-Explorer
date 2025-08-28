import type { User } from '../types';

interface Props {
  user: User;
}

const UserProfile = ({ user }: Props) => {
  return (
    <div className="text-center border p-6 rounded-xl shadow bg-white">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{user.login}</h2>
      <p className="text-gray-600">{user.bio || 'No bio available'}</p>
      <p className="mt-2">Followers: {user.followers}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default UserProfile;
