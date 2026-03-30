import axios from 'axios';
import { logout, setCredentials } from '../store/authSlice';

let injectedStore = null;

export const injectStore = (storeInstance) => {
  injectedStore = storeInstance;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

// Attach access token to every request
api.interceptors.request.use((config) => {
  if (injectedStore) {
    const token = injectedStore.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Auto-refresh on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401
        && error.response?.data?.code === 'TOKEN_EXPIRED'
        && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = injectedStore.getState().auth.refreshToken;
        const { data } = await axios.post('/api/auth/refresh', { refreshToken });
        injectedStore.dispatch(setCredentials({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        }));
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        injectedStore.dispatch(logout());
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;