import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import { ProfileContainer, StatsContainer, Stat, Avatar } from './styles';

const UserProfile = () => {
    const { username } = useParams(); 
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/users/${username}`);
                setUser(response.data);
                setError(null);
            } catch (err) {
                setError('Usuário não encontrado!');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]);

    if (loading) {
        return <p>Carregando perfil...</p>;
    }

    if (error) {
        return (
            <div>
                <h2>{error}</h2>
                <Link to="/listagem">Voltar para a busca</Link>
            </div>
        );
    }

    return (
        user && (
            <div>
                <Link to="/listagem">← Voltar para a busca</Link>
                <ProfileContainer>
                    <Avatar src={user.avatar_url} alt={`Avatar de ${user.name}`} />
                    <div>
                        <h1>{user.name}</h1>
                        <h2>@{user.login}</h2>
                        <p>{user.bio}</p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            Ver no GitHub
                        </a>
                    </div>
                </ProfileContainer>
                
                <h3>Estatísticas</h3>
                <StatsContainer>
                    <Stat>
                        <strong>{user.public_repos}</strong>
                        <span>Repositórios Públicos</span>
                    </Stat>
                    <Stat>
                        <strong>{user.followers}</strong>
                        <span>Seguidores</span>
                    </Stat>
                    <Stat>
                        <strong>{user.following}</strong>
                        <span>Seguindo</span>
                    </Stat>
                </StatsContainer>
            </div>
        )
    );
};

export default UserProfile;