// src/pages/Favorites.jsx
import React from "react";
import { useSelector } from "react-redux";
import TopPlay from "../components/TopPlay";
import { songs } from "../redux/slices/playerSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.player.favorites);
  const favSongs = songs.filter((s) => favorites.includes(s.id));
  return <TopPlay title="Favorites" songs={favSongs} />;
};

export default Favorites;
