import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COINS_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline3=false';

const initialState: any = {
  coins: [],
  status: '',
};

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await axios.get(COINS_URL);

  const data = response.data;

  return data;
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.coins = action.payload;
      state.status = 'fullfilled';
    });
  },
});

export default coinsSlice.reducer;
