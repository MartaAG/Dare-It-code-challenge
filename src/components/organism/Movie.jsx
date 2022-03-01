import React from 'react';
import { useParams } from 'react-router-dom'
import _ from 'lodash';
import MovieDetails from '../molecule/movieDetails';
import useMovieHook from '../../hooks/getMovieHook';
import ErrorBar from '../atom/ErrorBar';



function Movie() {
    const {id} = useParams();
    const {movie, isError} = useMovieHook({id})

    //handle 404 and loading data 
    
    
  console.log(isError)
       

  return (
    <div>
        {!_.isEmpty(movie) && <MovieDetails movie={movie}/>}
        {isError && <ErrorBar />  }
    </div>
  );
}

export default Movie;
