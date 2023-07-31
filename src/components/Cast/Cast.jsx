import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Api/fetchByCastDetails';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const fetchData = async () => {
    const data = await getCast(movieId);
    setActors(data.cast);
  };

  return (
    <>
      {actors.map(actor => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
          />
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </>
  );
};

// Cast.propTypes = {}
