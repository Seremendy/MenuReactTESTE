import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { MenuProvider } from './context/MenuContext';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import LoginPage from './pages/Login';
import UserListPage from './pages/UserList';
import UserProfile from './pages/UserProfile';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const MainContent = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <>
            {isAuthenticated && (
                <>
                    <Header />
                    <SideMenu />
                </>
            )}
           <main style={{ paddingTop: '80px', padding: '80px 20px 20px 20px' }}>
    <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route 
            path="/listagem" 
            element={<PrivateRoute><UserListPage /></PrivateRoute>} 
        />

        <Route 
            path="/user/:username" 
            element={<PrivateRoute><UserProfile /></PrivateRoute>}
        />

        <Route path="/" element={<Navigate to="/listagem" />} />
    </Routes>
</main>
        </>
    )
}

function App() {
    return (
        <AuthProvider>
            <MenuProvider>
                <Router>
                    <GlobalStyle />
                    <MainContent />
                </Router>
            </MenuProvider>
        </AuthProvider>
    );
}

export default App;