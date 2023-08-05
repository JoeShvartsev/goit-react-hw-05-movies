import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Api/fetchByCastDetails';
import { useCallback } from 'react';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x600';
  const fetchData =useCallback( async () => {
    const data = await getCast(movieId);
    setActors(data.cast);
  },[movieId]);

  useEffect(() => {
    fetchData();
    
  }, [movieId, fetchData]);

  

  return (
    <>
      {actors.map(actor => (
        <div key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </>
  );
};


