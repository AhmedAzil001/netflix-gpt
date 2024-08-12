import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    playVideo: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = null;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    removePopularMovie: (state, action) => {
      state.nowPlayingMovies = null;
    },
    addVideo: (state, action) => {
      state.playVideo = action.payload;
    },
    removeVideo: (state, action) => {
      state.playVideo = null;
    },
  },
});

export const {
  addNowPlayingMovie,
  removeNowPlayingMovie,
  addPopularMovie,
  removePopularMovie,
  addVideo,
  removeVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
