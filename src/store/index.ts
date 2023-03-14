import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movies';

const store = configureStore({
  reducer: { movies: movieSlice.reducer },
});

export default store;

export const movies = movieSlice.actions;
