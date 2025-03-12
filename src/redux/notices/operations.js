import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async thunkAPI => {
    try {
      const response = await axios.get('/notices/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchGenders = createAsyncThunk(
  'sex/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/sex');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchSpecies = createAsyncThunk(
  'species/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/species');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCities = createAsyncThunk(
  'cities/fetchAll',
  async (keyword, thunkAPI) => {
    try {
      if (!keyword || keyword.length < 3) {
        throw new Error('Keyword must be at least 3 characters long');
      }

      const response = await axios.get('/cities', {
        params: { keyword },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const AddToFavorites = createAsyncThunk(
  'notices/addFavorites',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const response = await axios.post(`/notices/favorites/add/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const RemoveToFavorites = createAsyncThunk(
  'notices/removeFavorites',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);

      const response = await axios.delete(`/notices/favorites/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
