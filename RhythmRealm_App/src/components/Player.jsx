// src/components/Player.jsx
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePlay } from "../redux/slices/playerSlice";

const Player = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  if (!currentSong) return null;

  return (
    <div className="player">
      <div className="player-info">
        <strong>{currentSong.title}</strong> - {currentSong.artist}
      </div>
      <button onClick={() => dispatch(togglePlay())}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <audio ref={audioRef} src={currentSong.src} />
    </div>
  );
};

export default Player;
