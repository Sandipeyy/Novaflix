// src/pages/MoviePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const MoviePage = () => {
  const { imdbId } = useParams(); // Get IMDB ID from URL
  return <MovieDetails imdbId={imdbId} isTvShow={false} />;
};

export default MoviePage;
