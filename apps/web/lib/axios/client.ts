import axios from 'axios';
import { API_BASE_URL } from '@lib/config';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL || 'https://nextflix-api-appliation.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  let token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (!token) {
    try {
      const res = await axiosClient.post('/auth/login',
        {
          email: process.env.AUTH_EMAIL,
          password: process.env.AUTH_PASS,
        }
      );
      token = res.data.access_token as string;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Auto-login failed', error);
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});