// src/assets/mockSongs.js
import dreamImg from "./images/dream.jpg";
import kittyImg from "./images/kitty.jpg";
import techImg from "./images/tech.jpg";
import valleyImg from "./images/valley.jpg";
import energyImg from "./images/energy.jpg";
import peacefulImg from "./images/peace.jpg";

import dreamAudio from "./audio/dream.mp3";
import kittyAudio from "./audio/kitty.mp3";
import techAudio from "./audio/tech.mp3";
import valleyAudio from "./audio/valley.mp3";
import energyAudio from "./audio/energy.mp3";
import peacefulAudio from "./audio/peace.mp3";

export const songs = [
  {
    id: 1,
    title: "I Love My Kitty Cat",
    artist: "Unknown",
    img: kittyImg,
    src: kittyAudio,
    genre: "Kids",
    trending: true,
  },
  {
    id: 2,
    title: "Tech House Vibes",
    artist: "Mixkit",
    img: techImg,
    src: techAudio,
    genre: "House",
    trending: true,
  },
  {
    id: 3,
    title: "Beautiful Dream",
    artist: "Mixkit",
    img: dreamImg,
    src: dreamAudio,
    genre: "Chill",
    trending: false,
  },
  {
    id: 4,
    title: "Valley Sunset",
    artist: "Mixkit",
    img: valleyImg,
    src: valleyAudio,
    genre: "Chill",
    trending: true,
  },
  {
    id: 5,
    title: "Energy Beat",
    artist: "Mixkit",
    img: energyImg,
    src: energyAudio,
    genre: "Electronic",
    trending: true,   // show also in Trending page if you want
  },
  {
    id: 6,
    title: "Peaceful Vibes",
    artist: "Mixkit",
    img: peacefulImg,
    src: peacefulAudio,
    genre: "Chill",
    trending: false,
  },
];
