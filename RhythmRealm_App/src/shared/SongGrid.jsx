import { useDispatch } from "react-redux";
import { playSong } from "../redux/slices/playerSlice";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();

  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <button onClick={() => dispatch(playSong(song))}>Play</button>
    </div>
  );
};

export default SongCard;
