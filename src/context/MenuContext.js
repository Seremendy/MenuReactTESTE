import React, { createContext, useState, useCallback } from 'react';

export const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prevState => !prevState);
    }, []);
    
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    );
};