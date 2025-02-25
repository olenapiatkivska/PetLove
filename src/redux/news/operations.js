import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async ({ page, searchQuery }, thunAPI) => {
    let response;
    try {
      if (!searchQuery) {
        response = await axios.get(`/news?page=${page}`);
      } else {
        response = await axios.get(`/news?page=${page}&keyword=${searchQuery}`);
      }
      return response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error.message);
    }
  },
);
