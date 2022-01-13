import { createSlice } from '@reduxjs/toolkit';


export const eachCoinSlice = createSlice({
  name: 'eachCoin',
  initialState: {
    coinId: ""
  },
  reducers: {
    update: (state, action) => {
      state.coinId = action.payload.coinId
    }
  }
});


export const { update } = eachCoinSlice.actions;
export default eachCoinSlice.reducer;

