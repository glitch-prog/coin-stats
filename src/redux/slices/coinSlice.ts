import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
  coin: {},
  history: {},
  status: '',
};
const date = new Date();
const today =
  date.getFullYear() +
  '.' +
  (date.getMonth() + 1 < 10
    ? '0' + (date.getMonth() + 1)
    : date.getMonth() + 1) +
  '.' +
  (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

const prevMonth =
  date.getFullYear() +
  '.' +
  (date.getMonth() < 10 ? '0' + (date.getMonth() - 2) : date.getMonth() - 2) +
  '.' +
  (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
const unixDate = Math.floor(new Date(today).getTime() / 1000);
const prevUnixDate = Math.floor(new Date(prevMonth).getTime() / 1000);

const HISTORY_URL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${prevUnixDate}&to=${unixDate}`;
export const fetchHistory = createAsyncThunk('coins/fetchHistory', async () => {
  const response = await axios.get(HISTORY_URL);

  const data = response.data;

  return data;
});

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setChosenCoin: (state: { coin: any }, action: PayloadAction<any>) => {
      state.coin = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.history = action.payload;
      state.status = 'fullfilled';
    });
  },
});

export const { setChosenCoin } = coinSlice.actions;
export default coinSlice.reducer;
