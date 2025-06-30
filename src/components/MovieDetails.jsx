// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/imdb';
import { getMovieEmbedUrl, getTvEmbedUrl } from '../api/vidsrc';

const MovieDetails = ({ imdbId, isTvShow }) => {
  const [movie, setMovie] = useState(null);
  const [embedUrl, setEmbedUrl] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getMovieDetails(imdbId);
      setMovie(details);

      // Fetch VidSrc embed URL based on whether it's a movie or TV show
      if (isTvShow) {
        setEmbedUrl(getTvEmbedUrl(imdbId));
      } else {
        setEmbedUrl(getMovieEmbedUrl(imdbId));
      }
    };

    fetchDetails();
  }, [imdbId, isTvShow]);

  return (
    <div className="movie-details">
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.image} alt={movie.title} />
          <p>{movie.plot}</p>

          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={movie.title}
              frameBorder="0"
              width="100%"
              height="500px"
              allowFullScreen
            />
          ) : (
            <p>Loading stream...</p>
          )}
        </>
      )}
    </div>
  );
};

export default MovieDetails;
