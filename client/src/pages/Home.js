import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Bienvenue sur l'application de chat</h1>
      <button onClick={goToRegister}>S'inscrire</button>
      <button onClick={goToLogin}>Se connecter</button>
    </div>
  );
};

export default Home;
