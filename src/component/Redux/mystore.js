import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slices/movieSlice"; 

const mystore = configureStore({
  reducer: {
    movie: movieReducer
  }
});

export default mystore;
