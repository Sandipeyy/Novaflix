// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Trending from './components/Trending';
import MoviePage from './pages/MoviePage';
import TvShowPage from './pages/TvShowPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movie/:imdbId" element={<MoviePage />} />
            <Route path="/tv/:imdbId" element={<TvShowPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
