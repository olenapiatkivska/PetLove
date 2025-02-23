import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

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
