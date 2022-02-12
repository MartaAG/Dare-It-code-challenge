import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import _ from 'lodash';
import MovieDetails from '../molecule/movieDetails';



function Movie({}) {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    console.log(id)

        useEffect(()=> {
        const getMovie = async() => {
            fetch(`https://ghibliapi.herokuapp.com/films/${id}`).then(res =>
            res.json()).then(res => setMovie(res))
        }
        getMovie()
        }, [])

  return (
    <div>
        {_.isEmpty(movie) ? 'loading data' :
        <MovieDetails movie={movie}/>}
    </div>
  );
}

export default Movie;
