import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../context';
import './common.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(authContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const res = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) {
                throw new Error('Sign in failed');
            }
            const data = await res.json();
            login(data.token);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="signin-container">
            <h2 className="signin-title">Sign In</h2>
            {error && <p className="error_message">{error}</p>}
            <form className="signin_form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
        </div>
    );
};

export default Signin;