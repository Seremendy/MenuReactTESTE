import React, { useContext } from 'react';
import { HeaderContainer, HamburgerButton } from './styles';
import { MenuContext } from '../../context/MenuContext';

const Header = () => {
    const { isMenuOpen, toggleMenu } = useContext(MenuContext);

    return (
        <HeaderContainer>
            <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} aria-label="Abrir menu">
                <span />
                <span />
                <span />
            </HamburgerButton>
        </HeaderContainer>
    );
};

export default Header;