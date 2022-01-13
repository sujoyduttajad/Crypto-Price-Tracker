import { createSlice } from '@reduxjs/toolkit';
// import { ARTICLES } from '../../app/data';

export const eachCoinSlice = createSlice({
  name: 'eachCoin',
  initialState: {
    articles: ARTICLES,
  },
  reducers: {}
});

export const selectArticles = (state) => state.articles.articles;


export default articlesSlice.reducer;
