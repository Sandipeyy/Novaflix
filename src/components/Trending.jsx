// src/components/Trending.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Trending = () => {
  // Example data for movies and TV shows
  const trendingMovies = [
    { imdbId: "tt5433140", title: "Some Movie" },
    { imdbId: "tt0111161", title: "The Shawshank Redemption" },
  ];

  const trendingTVShows = [
    { imdbId: "tt0944947", title: "Game of Thrones" },
  ];

  return (
    <section>
      <h2>Trending Movies</h2>
      <div className="trending-list">
        {trendingMovies.map((movie) => (
          <div key={movie.imdbId} className="card">
            <Link to={`/movie/${movie.imdbId}`}>
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <h2>Trending TV Shows</h2>
      <div className="trending-list">
        {trendingTVShows.map((show) => (
          <div key={show.imdbId} className="card">
            <Link to={`/tv/${show.imdbId}`}>
              <h3>{show.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
