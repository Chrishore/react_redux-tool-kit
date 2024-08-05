import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { appReset } from "./actions";






const store = configureStore({
    reducer: {
        songs: songsReducer,
        movie: moviesReducer
    }
});

export { store, appReset, addMovie, removeMovie, addSong, removeSong }