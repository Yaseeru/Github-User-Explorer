import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const AppContext = createContext(undefined);
export const AppProvider = ({ children }) => {
    const [cachedUsers, setCachedUsers] = useState({});
    const addToCache = (username, data) => {
        setCachedUsers((prev) => ({
            ...prev,
            [username.toLowerCase()]: data,
        }));
    };
    return (_jsx(AppContext.Provider, { value: { cachedUsers, addToCache }, children: children }));
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
};
