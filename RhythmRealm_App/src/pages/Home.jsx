// src/pages/Home.jsx
import React from "react";
import TopPlay from "../components/TopPlay";
import { songs } from "../redux/slices/playerSlice";

const Home = () => {
  return <TopPlay title="Home" songs={songs} />;
};

export default Home;
