// src/redux/slices/playerSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../../assets/mockSongs";

const initialState = {
  currentSong: null,
  isPlaying: false,
  favorites: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    },
    addFavorite(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});

export const { setCurrentSong, togglePlay, addFavorite, removeFavorite } =
  playerSlice.actions;

export { songs };

export default playerSlice.reducer;
