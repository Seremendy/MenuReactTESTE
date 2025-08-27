import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #f1f1f1;
`;

export const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
`;

export const Stat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);

    strong {
        font-size: 2rem;
        color: #333;
    }

    span {
        font-size: 0.9rem;
        color: #666;
        margin-top: 0.5rem;
    }
`;