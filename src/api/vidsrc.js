// src/api/vidsrc.js

// Function to generate the embed URL for movies
export const getMovieEmbedUrl = (imdbId) => {
  return `https://vidsrc.xyz/embed/movie?imdb=${imdbId}`;
};

// Function to generate the embed URL for TV shows
export const getTvEmbedUrl = (imdbId) => {
  return `https://vidsrc.xyz/embed/tv?imdb=${imdbId}`;
};
