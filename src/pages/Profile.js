import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser, getRepos } from '../utils/api';
import { useAppContext } from '../context/AppContext';
import UserProfile from '../components/UserProfile';
import RepoList from '../components/RepoList';
const Profile = () => {
    const { username } = useParams();
    const { cachedUsers, addToCache } = useAppContext();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            if (!username)
                return;
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
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [username, cachedUsers, addToCache]);
    if (loading)
        return _jsx("p", { className: "text-center", children: "Loading..." });
    if (error)
        return _jsx("p", { className: "text-red-500 text-center", children: error });
    if (!data)
        return _jsx("p", { className: "text-center", children: "No data available" });
    return (_jsxs("div", { className: "space-y-8", children: [_jsx(UserProfile, { user: data.user }), _jsx(RepoList, { repos: data.repos })] }));
};
export default Profile;
