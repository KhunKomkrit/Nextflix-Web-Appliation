import axios from 'axios';
import { API_BASE_URL, AUTH_EMAIL, AUTH_PASS } from '@lib/config';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL || 'https://nextflix-api-appliation.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  let token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  let isLoggingIn = false;
  if (!token && !isLoggingIn) {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`,
        {
          email: AUTH_EMAIL,
          password: AUTH_PASS,
        }
      );
      token = res.data.access_token as string;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Auto-login failed', error);
    } finally {
      isLoggingIn = false;
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});