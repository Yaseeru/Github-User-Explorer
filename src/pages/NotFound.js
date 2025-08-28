import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-[80vh] text-center space-y-4", children: [_jsx("h1", { className: "text-4xl font-bold text-red-600", children: "404" }), _jsx("p", { className: "text-lg", children: "Oops! The page you\u2019re looking for doesn\u2019t exist." }), _jsx(Link, { to: "/", className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", children: "Go Back Home" })] }));
};
export default NotFound;
