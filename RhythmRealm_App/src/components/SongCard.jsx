// src/components/SongCard.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, addFavorite, removeFavorite } from "../redux/slices/playerSlice";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.player.favorites);
  const isFav = favorites.includes(song.id);

  const handlePlay = () => {
    dispatch(setCurrentSong(song));
  };

  const toggleFavorite = () => {
    if (isFav) {
      dispatch(removeFavorite(song.id));
    } else {
      dispatch(addFavorite(song.id));
    }
  };

  return (
    <div className="song-card">
      <img src={song.img} alt={song.title} className="song-image" />
      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <div className="song-actions">
        <button onClick={handlePlay}>Play</button>
        <button onClick={toggleFavorite}>{isFav ? "★" : "☆"}</button>
      </div>
    </div>
  );
};

export default SongCard;
