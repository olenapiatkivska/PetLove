import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operations.js';

const initialState = {
  list: [],
  isLoadingFriends: false,
  isErrorFriends: false,
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, state => {
        state.isLoadingFriends = true;
        state.isErrorFriends = false;
      })
      .addCase(fetchFriends.fulfilled, (state, { payload }) => {
        state.isLoadingFriends = false;
        state.isErrorFriends = false;
        state.list = payload;
      })
      .addCase(fetchFriends.rejected, state => {
        state.isLoadingFriends = false;
        state.isErrorFriends = true;
      });
  },
});

export const FriendsReducer = friendsSlice.reducer;
