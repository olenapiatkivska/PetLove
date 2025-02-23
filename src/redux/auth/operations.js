import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    console.log('Sending data:', credentials);
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      toast.success(`Welcome ${res?.data?.name}`);
      return res.data;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error);

      if (error.response?.status === 409) {
        toast.error('This email is already in use. Try logging in.');
      } else {
        toast.error(error.response?.data?.message || 'Error, Invalid data');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
      setAuthHeader(res.data.token);
      toast.success(`Welcome ${res.data.name}`);
      return res.data;
    } catch (error) {
      toast.error('Error, Invalid data');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/signout');
    clearAuthHeader();
  } catch (error) {
    toast.error('Error, server not answer');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    let persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current/full');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
