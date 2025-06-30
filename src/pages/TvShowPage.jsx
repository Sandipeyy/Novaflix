// src/pages/TvShowPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const TvShowPage = () => {
  const { imdbId } = useParams(); // Get IMDB ID from URL
  return <MovieDetails imdbId={imdbId} isTvShow={true} />;
};

export default TvShowPage;
