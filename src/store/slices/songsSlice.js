import { createSlice } from "@reduxjs/toolkit";
import { appReset } from "../actions";

const songSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload);
        },
        removeSong: (state, action) => {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(appReset, (state, action) => {
            return [];
        })
    }
})

export const { addSong, removeSong } = songSlice.actions;
export const songsReducer = songSlice.reducer;