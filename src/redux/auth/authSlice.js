import { createSlice } from '@reduxjs/toolkit';
import {
  addPet,
  editUser,
  logIn,
  logOut,
  refreshUser,
  register,
  removePet,
} from './operations.js';

const initialState = {
  user: { name: null, email: null, phone: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  pets: [],
  noticesViewed: [],
  noticesFavorites: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        localStorage.setItem('token', payload.token);
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, phone: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.pets = [];
        state.noticesViewed = [];
        state.noticesFavorites = [];
        localStorage.removeItem('token');
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        console.log('Refreshing user...');
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        console.log('User refreshed successfully:', payload);
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.avatar = payload.avatar;
        state.noticesFavorites = payload.noticesFavorites;
        state.noticesViewed = payload.noticesViewed;
        state.pets = payload.pets;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        console.log('User refresh failed:', payload);
        state.isRefreshing = false;
      })
      .addCase(editUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.avatar = payload.avatar;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(editUser.rejected, state => {
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(addPet.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.pets.push(payload); // Додаємо нову тварину
        // state.pets = payload.pets;
        state.isLoading = false;
      })
      .addCase(addPet.rejected, state => {
        state.isLoading = false;
      })
      .addCase(removePet.pending, state => {
        state.isLoading = true;
      })
      .addCase(removePet.fulfilled, (state, { payload }) => {
        state.pets = state.pets.filter(pet => pet.id !== payload.id); // Видаляємо за ID
        // state.pets = payload.pets;
        state.isLoading = false;
      })
      .addCase(removePet.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
