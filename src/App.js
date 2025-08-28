import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
const Profile = lazy(() => import('./pages/Profile'));
function App() {
    return (_jsx("div", { className: "container mx-auto p-4", children: _jsx(Suspense, { fallback: _jsx("p", { className: "text-center", children: "Loading page..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/:username", element: _jsx(Profile, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }));
}
export default App;
