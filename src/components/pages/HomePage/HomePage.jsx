import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrandingDay } from 'Api/fetchTrendings';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getTrandingDay();
    
    setMovies(data);
  };

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};


