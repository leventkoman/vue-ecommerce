import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// todo:  add refresh token control.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
