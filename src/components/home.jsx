import React, { useContext } from 'react';
import { authContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { token, logout } = useContext(authContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            {token && <p>Your token: {token}</p>}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;