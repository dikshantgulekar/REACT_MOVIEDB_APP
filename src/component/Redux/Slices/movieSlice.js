import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieName: ''
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    shareMovieName: (state, action) => {
    //   console.log("shareMovieName");
      state.movieName = action.payload;
    }
  }
});

export const { shareMovieName } = movieSlice.actions;


export default movieSlice.reducer;
