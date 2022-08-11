import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  coin: {},
  status: '',
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setChosenCoin: (state: { coin: any }, action: PayloadAction<any>) => {
      state.coin = action.payload;
    },
  },
});

export const { setChosenCoin } = coinSlice.actions;
export default coinSlice.reducer;
