import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const fetchFriends = createAsyncThunk(
  'friends/fetchAll',
  async thunkAPI => {
    try {
      const response = await axios.get('/friends');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
