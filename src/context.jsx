import React, { createContext, useState } from 'react';

// Create the context
const authContext = createContext();

// Create the provider component
const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const login = (newToken) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <authContext.Provider value={{ token, login, logout }}>
            {children}
        </authContext.Provider>
    );
};

export { authContext, AuthProvider };