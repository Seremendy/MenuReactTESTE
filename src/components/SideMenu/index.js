import React, { useContext } from 'react';
import { Nav, CloseButton, Overlay } from './styles';
import { MenuContext } from '../../context/MenuContext';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    const { isMenuOpen, toggleMenu, closeMenu } = useContext(MenuContext);

    return (
        <>
            <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
            <Nav isOpen={isMenuOpen}>
                <CloseButton onClick={toggleMenu}>&times;</CloseButton>
                <ul>
                    <li><Link to="/listagem" onClick={closeMenu}>Listagem</Link></li>
                    <li><a href="#" onClick={closeMenu}>Sobre</a></li>
                    <li><a href="#" onClick={closeMenu}>Serviços</a></li>
                    <li><a href="#" onClick={closeMenu}>Contato</a></li>
                </ul>
            </Nav>
        </>
    );
};

export default SideMenu;