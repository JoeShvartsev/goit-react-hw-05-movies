import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getByID } from 'Api/FetchMovieDetailes';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const fetchData = async () => {
    const data = await getByID(movieId);
    console.log(data);
    setMovie(data);
  };

  return (
    <>
      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <h2>{movie.release_date}</h2>
          <h2>{movie.vote_average}</h2>
        </div>
      )}
    </>
  );
};
