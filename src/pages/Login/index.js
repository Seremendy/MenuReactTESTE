import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(user, password);
        if (success) {
            navigate('/listagem');
        } else {
            setError('Credenciais inválidas!');
        }
    };
    
    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="text" 
                        placeholder="Usuário" 
                        value={user} 
                        onChange={e => setUser(e.target.value)} 
                        style={{ padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        style={{ padding: '8px' }} 
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px' }}>Entrar</button>
                {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;