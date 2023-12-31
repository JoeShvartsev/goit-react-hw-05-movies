import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; 

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};


MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


