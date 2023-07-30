import React from 'react';
import { NavLink } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
      </ul>
    </div>
  );
};
