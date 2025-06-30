// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>🎬 Novaflix</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>AI Recommendations</li>
          <li>Search</li>
          <li>Watchlist</li>
          <li>Genres</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
