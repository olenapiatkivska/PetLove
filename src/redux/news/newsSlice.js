import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations.js';

const initialState = {
  list: [],
  totalPages: null,
  isLoading: false,
  isError: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.list = payload.results;
        state.totalPages = payload.totalPages;
      })
      .addCase(fetchNews.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const NewsReducer = newsSlice.reducer;
