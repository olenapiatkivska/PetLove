import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice.js';
import { FriendsReducer } from './friends/friendsSlice.js';
import { NewsReducer } from './news/newsSlice.js';
import { NoticesReducer } from './notices/noticesSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    news: NewsReducer,
    friends: FriendsReducer,
    notices: NoticesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
