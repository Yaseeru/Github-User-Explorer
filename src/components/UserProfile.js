import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
const UserProfile = ({ user }) => {
    return (_jsxs("div", { className: "text-center border p-6 rounded-xl shadow bg-white", "aria-label": "GitHub user profile", children: [_jsx("img", { src: user.avatar_url, alt: `${user.login}'s avatar`, className: "w-24 h-24 mx-auto rounded-full mb-4" }), _jsx("h2", { className: "text-xl font-bold", children: user.login }), _jsx("p", { className: "text-gray-600", children: user.bio || 'No bio available' }), _jsxs("p", { className: "mt-2", children: [_jsx("span", { className: "font-medium", children: "Followers:" }), " ", user.followers] }), _jsx("a", { href: user.html_url, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500 hover:underline", children: "View on GitHub" })] }));
};
export default memo(UserProfile);
