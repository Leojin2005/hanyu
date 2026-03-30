import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authService } from '../services/authService';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: localStorage.getItem('refreshToken'),
  isLoading: false,
  isRestoringSession: !!localStorage.getItem('refreshToken'),
  error: null,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await authService.register(formData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Registration failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await authService.login(formData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Login failed');
    }
  }
);

export const restoreSession = createAsyncThunk(
  'auth/restoreSession',
  async (_, { getState, rejectWithValue }) => {
    const refreshToken = getState().auth.refreshToken;
    if (!refreshToken) return rejectWithValue('No refresh token');
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });
      return data;
    } catch {
      return rejectWithValue('Session expired');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isRestoringSession = false;
      localStorage.removeItem('refreshToken');
    },
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    updateUserXp: (state, action) => {
      if (state.user) {
        state.user.xp = action.payload.xp;
        state.user.level = action.payload.level;
        state.user.streak = action.payload.streak;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (s) => { s.isLoading = true; s.error = null; })
      .addCase(registerUser.fulfilled, (s, a) => {
        s.isLoading = false;
        s.user = a.payload.user;
        s.accessToken = a.payload.accessToken;
        s.refreshToken = a.payload.refreshToken;
        localStorage.setItem('refreshToken', a.payload.refreshToken);
      })
      .addCase(registerUser.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.payload;
      })
      .addCase(loginUser.pending, (s) => { s.isLoading = true; s.error = null; })
      .addCase(loginUser.fulfilled, (s, a) => {
        s.isLoading = false;
        s.user = a.payload.user;
        s.accessToken = a.payload.accessToken;
        s.refreshToken = a.payload.refreshToken;
        localStorage.setItem('refreshToken', a.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.payload;
      })
      .addCase(restoreSession.fulfilled, (s, a) => {
        s.user = a.payload.user;
        s.accessToken = a.payload.accessToken;
        s.refreshToken = a.payload.refreshToken;
        s.isRestoringSession = false;
        localStorage.setItem('refreshToken', a.payload.refreshToken);
      })
      .addCase(restoreSession.rejected, (s) => {
        s.user = null;
        s.accessToken = null;
        s.refreshToken = null;
        s.isRestoringSession = false;
        localStorage.removeItem('refreshToken');
      });
  },
});

export const { logout, setCredentials, updateUserXp } = authSlice.actions;
export default authSlice.reducer;
