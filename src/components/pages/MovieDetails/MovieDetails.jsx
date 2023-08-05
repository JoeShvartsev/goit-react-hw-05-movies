import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getByID } from 'Api/FetchMovieDetails';
import { NavLink } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { useCallback } from 'react';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [navlocation, setNavLocation] = useState([]);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const firstRender = useRef(true);
  
  useEffect(() => {
    if (firstRender.current && location.state) {
      setNavLocation(location.state);
    } else {
      setNavLocation('/');
    }
    firstRender.current = false;
  }, [location.state]);

  
  const fetchData = useCallback(async () => {
    const data = await getByID(movieId);
    setMovie(data);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [movieId, fetchData]);

  const handleBack = () => {
    navigate(navlocation);
  };
  return (
    <>
      {movie && (
        <div className={css.div}>
          <div className={css.btn}>
            <button type="button" onClick={handleBack}>
              +==
            </button>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
            <h2>{movie.vote_average}</h2>
            <div className={css.links}>
              <NavLink to={`cast`} state={location}>
                Cast
              </NavLink>
              <NavLink to={`review`} stat={location}>
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};
