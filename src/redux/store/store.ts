import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from '../slices/cryptoSlice';
import coinReducer from '../slices/coinSlice';
import searchReducer from '../slices/searchSlice';
import favoritesReducer from '../slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    chosenCoin: coinReducer,
    searchCoin: searchReducer,
    favoriteList: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
