import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrandingDay } from 'Api/fetchTrendings';
import { useMoviesContext } from 'components/Context/MoviesContext';
import { useCallback } from 'react';

export const HomePage = () => {
  const { movies, setMovies } = useMoviesContext();
  const location = useLocation()
  const fetchData = useCallback( async () => {
    const data = await getTrandingDay();
    setMovies(data);
  },[setMovies]);
  
  useEffect(() => {
    if (!movies.length) {
      fetchData();
    }
  }, [movies, fetchData]);



  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={location}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};



