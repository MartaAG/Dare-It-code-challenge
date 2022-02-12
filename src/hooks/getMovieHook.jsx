import React, {useEffect, useState} from "react";

function useMovieHook({id}) {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const getMovie = async() => {
            setIsLoading(true)
            fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res =>res.json())
            .then(res => setMovie(res))
            .catch((error) => {console.log(error)})
            .finally(() => setIsLoading(false) )
        }
        getMovie()
        }, [])
        
    return {movie, isLoading, error}
}

export default useMovieHook;