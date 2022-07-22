import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from '../slices/cryptoSlice';
import coinReducer from '../slices/coinSlice';
import searchReducer from '../slices/searchSlice';

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    chosenCoin: coinReducer,
    searchCoin: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
