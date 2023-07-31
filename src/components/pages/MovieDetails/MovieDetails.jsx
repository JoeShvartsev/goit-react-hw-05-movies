import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getByID } from 'Api/FetchMovieDetails';
import { NavLink } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const fetchData = async () => {
    const data = await getByID(movieId);
    setMovie(data);
  };
  const handleBack = () => {
    navigate(location.state)
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
              <NavLink to={`cast`}>Cast</NavLink>

              <NavLink to={`review`}>Reviews</NavLink>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};
