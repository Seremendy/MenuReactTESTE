import React, { useState, useEffect, useCallback, useMemo } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const UserItem = React.memo(({ user }) => {
    return (
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={user.avatar_url} alt={user.login} width="50" style={{ borderRadius: '50%', marginRight: '10px' }}/>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
        </li>
    );
});

const UserListPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    
    // useCallback para evitar recriação da função em cada render
    const fetchUsers = useCallback(async () => {
        if (!query) return;
        setLoading(true);
        try {
            const response = await api.get(`/search/users`, {
                params: { q: query, page: page, per_page: 10 }
            });
            setUsers(response.data.items);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        } finally {
            setLoading(false);
        }
    }, [query, page]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchUsers();
        }, 500); // Debounce para evitar chamadas excessivas na API ao digitar
        return () => clearTimeout(timer);
    }, [fetchUsers]);

    // useMemo para evitar remapear a lista de usuários desnecessariamente
    const memoizedUsers = useMemo(() => users.map(user => (
        <UserItem key={user.id} user={user} />
    )), [users]);

    return (
        <div>
            <h1>Busca de Usuários no GitHub</h1>
            <input 
                type="text"
                placeholder="Buscar usuário..."
                defaultValue={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: '8px', marginBottom: '20px', width: '300px' }}
            />
            {loading ? <p>Carregando...</p> : <ul style={{ listStyle: 'none' }}>{memoizedUsers}</ul>}
            
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1} style={{ padding: '8px' }}>
                    Anterior
                </button>
                <span style={{ margin: '0 10px' }}>Página {page}</span>
                <button onClick={() => setPage(p => p + 1)} style={{ padding: '8px' }}>
                    Próxima
                </button>
            </div>
        </div>
    );
};

export default UserListPage;