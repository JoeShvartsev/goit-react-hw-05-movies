import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink state={location} to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
      </ul>
    </div>
  );
};
