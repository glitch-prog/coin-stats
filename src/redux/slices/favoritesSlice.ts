import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  list: [],
  status: '',
};

const favoritesSlice = createSlice({
  name: 'favoriteList',
  initialState,
  reducers: {
    setFavoriteCoin: (state: { list: any }, action: PayloadAction<any>) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { setFavoriteCoin } = favoritesSlice.actions;
export default favoritesSlice.reducer;
