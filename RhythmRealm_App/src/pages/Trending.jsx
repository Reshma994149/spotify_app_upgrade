// src/pages/Trending.jsx
import React from "react";
import TopPlay from "../components/TopPlay";
import { songs } from "../redux/slices/playerSlice";

const Trending = () => {
  const trendingSongs = songs.filter((s) => s.trending);
  return <TopPlay title="Trending" songs={trendingSongs} />;
};

export default Trending;
