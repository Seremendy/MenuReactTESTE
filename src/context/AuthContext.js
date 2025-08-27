import React, { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = useCallback((user, password) => {
        const validUser = process.env.REACT_APP_LOGIN;
        const validPassword = process.env.REACT_APP_PASSWORD;

        if (user === validUser && password === validPassword) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }, []);

    const logout = useCallback(() => {
        setIsAuthenticated(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};