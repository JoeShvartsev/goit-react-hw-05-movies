import { React } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import {MoviesList} from 'components/MoviesList/MoviesList'
import {getByQuerry} from 'Api/fetchByQuerry'
import { useState, useEffect } from 'react';


export const MoviesPage = () => {
  const [movie,setMovie]=useState([])
  const [querry,setQuerry]=useState([])
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querry]);

  const fetchData = async () => {
    const data = await getByQuerry(querry);
    
    setMovie(data);
  };
  const onHandleSubmit =(e)=>{e.preventDefault();
    const querryWord = e.target[1].value;
    setQuerry(querryWord);
    e.target[1].value = "";}
  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit}></SearchBar>
      <MoviesList movies={movie}></MoviesList>
    </div>
  );
};
