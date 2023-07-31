import React, { useState, } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getByQuerry } from 'Api/fetchByQuerry';
import {  useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let searchValue = searchParams.get('search');
 

  const fetchData = async () => {
    if (searchValue) {
      try {
        const data = await getByQuerry(searchValue);
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    fetchData();
    searchParams.set('search', '')
    
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
