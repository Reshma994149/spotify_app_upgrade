// src/components/TopPlay.jsx
import React from "react";
import SongCard from "./SongCard";

const TopPlay = ({ title, songs }) => {
  return (
    <div className="top-play">
      <h1 className="page-title">{title}</h1>
      <div className="song-grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default TopPlay;
