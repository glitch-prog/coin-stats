import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
  coin: {},
  history: {},
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setChosenCoin: (state: { coin: any }, action: PayloadAction<any>) => {
      state.coin = action.payload;
    },
    setCoinHistory: (state: { history: any }, action: PayloadAction<any>) => {
      state.history = action.payload;
    },
  },
});

export const { setChosenCoin } = coinSlice.actions;
export default coinSlice.reducer;
