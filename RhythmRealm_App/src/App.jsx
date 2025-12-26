// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";
import Favorites from "./pages/Favorites";

const App = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "trending") return <Trending />;
    if (page === "genres") return <Genres />;
    if (page === "favorites") return <Favorites />;
    return <Home />;
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar currentPage={page} onChangePage={setPage} />
        <div className="content">{renderPage()}</div>
      </div>
      <Player />
    </div>
  );
};

export default App;
