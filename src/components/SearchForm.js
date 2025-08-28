import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getUser, getRepos } from '../utils/api';
const SearchForm = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { addToCache } = useAppContext();
    const handleSubmit = async (e) => {
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
        }
        catch (err) {
            setError(err.message);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col items-center space-y-4", children: [_jsx("input", { type: "text", value: username, onChange: (e) => setUsername(e.target.value), placeholder: "Enter GitHub username", className: "border p-2 rounded w-64", "aria-label": "GitHub username input" }), _jsx("button", { type: "submit", disabled: !username.trim(), className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50", children: "Search" }), error && _jsx("p", { className: "text-red-500", children: error })] }));
};
export default SearchForm;
