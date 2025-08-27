import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 70px; /* Altura definida para o header */
`;

export const HamburgerButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    z-index: 1002;

    span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: #333;
        transition: all 0.3s ease-in-out;
        position: relative;
    }

    ${({ isOpen }) => isOpen && `
        span:nth-child(2) {
            opacity: 0;
            transform: translateX(-20px);
        }
        span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    `}
`;