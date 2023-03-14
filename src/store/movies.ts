import { Movie } from '../types';
// import { createSlice } from '@reduxjs/toolkit/dist/createSlice';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { trendingMovies: Movie[]; upcomingMovies: Movie[] } = {
  trendingMovies: [],
  upcomingMovies: [],
};

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addTrendingMovies(state, action) {
      state.trendingMovies = action.payload.trendingMovies;
    },

    addUpcomingMovies(state, action): any {
      state.upcomingMovies = action.payload.upcomingMovies;
    },
  },
});

export default slice;
