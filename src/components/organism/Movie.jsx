import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import _ from 'lodash';
import MovieDetails from '../molecule/movieDetails';
import useMovieHook from '../../hooks/getMovieHook';



function Movie({}) {
    const {id} = useParams();
    const {movie} = useMovieHook({id})
    
    

       

  return (
    <div>
        {_.isEmpty(movie) ? 'loading data' :
        <MovieDetails movie={movie}/>}
    </div>
  );
}

export default Movie;
