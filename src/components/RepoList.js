import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
const RepoList = ({ repos }) => {
    const sortedRepos = useMemo(() => [...repos]
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 5), // 👈 Limit to 5
    [repos]);
    if (sortedRepos.length === 0) {
        return _jsx("p", { children: "No repositories found." });
    }
    return (_jsx("ul", { className: "space-y-4", role: "list", children: sortedRepos.map((repo) => (_jsxs("li", { className: "border p-4 rounded", children: [_jsx("h3", { className: "font-semibold", children: repo.name }), _jsx("p", { children: repo.description || 'No description' }), _jsxs("p", { children: ["\u2B50 ", repo.stargazers_count] }), _jsx("a", { href: repo.html_url, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500", children: "View Repo" })] }, repo.id))) }));
};
export default RepoList;
