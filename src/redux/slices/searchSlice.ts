import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: { search: string } = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchCoin: (
      state: { search: string },
      action: PayloadAction<string>
    ) => {
      state.search = action.payload;
    },
  },
});

export const { setSearchCoin } = searchSlice.actions;
export default searchSlice.reducer;
