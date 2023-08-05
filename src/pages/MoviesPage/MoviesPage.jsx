import React, { useState, useEffect, useCallback} from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getByQuerry } from 'Api/fetchByQuerry';
import {  useSearchParams } from 'react-router-dom';
import { useRef } from 'react';


export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let searchValue = searchParams.get('search');
  
  const firstRender = useRef(true)
  const fetchData = useCallback( async () => {
    if (searchValue) {
      try {
        const data = await getByQuerry(searchValue);
        setMovies(data);
        searchParams.set('search', '');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },[searchParams,searchValue]);
  
  useEffect(() => {
    if (firstRender.current && searchValue) {
      fetchData(searchValue);
    }
    firstRender.current = false; 
  
  }, [fetchData, searchValue]);
  
  
  const onHandleSubmit = e => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <SearchBar
        onSubmit={onHandleSubmit}
        setSearchParams={setSearchParams}
        searchValue={searchValue}
      />
      <MoviesList movies={movies} />
    </div>
  );
};
