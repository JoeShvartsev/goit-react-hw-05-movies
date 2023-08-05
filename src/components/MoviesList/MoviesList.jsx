import React from 'react';
import PropTypes from 'prop-types'; 
import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

