// src/pages/Genres.jsx
import React from "react";
import TopPlay from "../components/TopPlay";
import { songs } from "../redux/slices/playerSlice";

const Genres = () => {
  // simple: show all, you can group by genre later
  return <TopPlay title="Genres" songs={songs} />;
};

export default Genres;
