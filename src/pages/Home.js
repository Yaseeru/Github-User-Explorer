import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchForm from '../components/SearchForm';
const Home = () => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4", children: [_jsx("h1", { className: "text-3xl font-bold mb-6 text-gray-800", children: "GitHub User Explorer" }), _jsx(SearchForm, {})] }));
};
export default Home;
