import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    playVideo:null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = null;
    },
    addVideo: (state,action) => {
      state.playVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovie,removeNowPlayingMovie,addVideo } = movieSlice.actions;

export default movieSlice.reducer;
