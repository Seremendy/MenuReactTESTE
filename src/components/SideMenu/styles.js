import styled from 'styled-components';

export const Nav = styled.nav`
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #333;
    padding-top: 60px;
    z-index: 1001;
    
    transform: translateX(-100%);
    transition: transform 0.4s ease-in-out;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        padding: 15px 25px;
        text-decoration: none;
        font-size: 18px;
        color: #818181;
        display: block;
        opacity: 0;
        transform: translateY(20px);
        transition: color 0.3s, background-color 0.3s, opacity 0.3s ease, transform 0.3s ease;

        &:hover {
            color: #f1f1f1;
            background-color: #575757;
        }
    }
    
    ${({ isOpen }) => isOpen && `
        transform: translateX(0);
        
        a {
            opacity: 1;
            transform: translateY(0);
        }

        li:nth-child(1) a { transition-delay: 0.2s; }
        li:nth-child(2) a { transition-delay: 0.3s; }
        li:nth-child(3) a { transition-delay: 0.4s; }
        li:nth-child(4) a { transition-delay: 0.5s; }
    `}
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 36px;
    color: #f1f1f1;
    background: none;
    border: none;
    cursor: pointer;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    transition: opacity 0.4s ease-in-out;
`;