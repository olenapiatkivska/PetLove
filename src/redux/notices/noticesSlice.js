import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './filtration.js';
import {
  fetchCategories,
  fetchCities,
  fetchGenders,
  fetchSpecies,
} from './operations.js';

const initialState = {
  list: [],
  categories: [],
  genders: [],
  species: [],
  cities: [],
  isLoading: false,
  isError: false,
  totalPages: 1,
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.list = payload.results;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchNotices.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCategories.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = payload;
      })
      .addCase(fetchCategories.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchGenders.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchGenders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.genders = payload;
      })
      .addCase(fetchGenders.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchSpecies.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSpecies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.species = payload;
      })
      .addCase(fetchSpecies.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCities.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCities.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.cities = payload;
      })
      .addCase(fetchCities.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const NoticesReducer = noticesSlice.reducer;
