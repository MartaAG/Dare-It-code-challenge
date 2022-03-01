import React, {useEffect, useState} from "react";

function useMovieHook({id}) {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setError] = useState(null);

    useEffect(()=> {
        const getMovie = async() => {
            setIsLoading(true)
            fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res =>res.json())
            .then(res => setMovie(res))
            .catch((error) => {setError(error)})
            .finally(() => setIsLoading(false) )
        }
        getMovie()
        }, [id])
        
    return {movie, isLoading, isError}
}

export default useMovieHook;