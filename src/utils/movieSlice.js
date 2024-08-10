import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = null;
    },
  },
});

export const { addNowPlayingMovie,removeNowPlayingMovie } = movieSlice.actions;

export default movieSlice.reducer;
