import { createSlice } from '@reduxjs/toolkit';


export const eachCoinSlice = createSlice({
  name: 'eachCoin',
  initialState: {
    coinId: ""
  },
  reducers: {
    add: (state, action) => {
      state.coin = action.payload.coin
    },
    update: (state, action) => {
      state.coinId = action.payload.coinId
    }
  }
});


export const { update, add } = eachCoinSlice.actions;
export default eachCoinSlice.reducer;

