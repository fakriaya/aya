import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth';

// Inscription
export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Erreur d\'inscription');
  }
};

// Connexion
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Contient le token
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Erreur de connexion');
  }
};
