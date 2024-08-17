import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptShow:false,
        movieList:null,
    },
    reducers:{
        toggleGpt: (state,action) => {
            state.gptShow= !state.gptShow
        },
        addMovie: (state,action) => {
            state.movieList=action.payload;
        }
    }
})

export const {toggleGpt} = gptSlice.actions;
export default gptSlice.reducer;