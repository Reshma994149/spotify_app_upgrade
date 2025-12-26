// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ currentPage, onChangePage }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "trending", label: "Trending" },
    { id: "genres", label: "Genres" },
    { id: "favorites", label: "Favorites" },
  ];

  return (
    <div className="sidebar">
      {links.map((link) => (
        <button
          key={link.id}
          className={
            currentPage === link.id ? "sidebar-link active" : "sidebar-link"
          }
          onClick={() => onChangePage(link.id)}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
