import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getByID } from 'Api/FetchMovieDetails';
import { NavLink } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { useCallback } from 'react';

 const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [navlocation, setNavLocation] = useState([]);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const firstRender = useRef(true);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
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
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
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
export default MovieDetails
