import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authContext } from './context';
import Signup from './components/signup';
import Signin from './components/signin';
import Home from './components/home';
import './App.css';

function App() {
    const { token } = useContext(authContext);
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={token ? <Home /> : <Navigate to="/signup" />} />
        </Routes>
    );
}

export default App;
