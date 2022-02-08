import React from 'react';
import {useQuery} from 'react-query'


function Content() {


        const { isLoading, error, data } = useQuery('repoData', () =>
          fetch('https://ghibliapi.herokuapp.com/films').then(res =>
            res.json()
          )
        )
        if (isLoading) return 'Loading...'
        if (error) return 'An error has occurred: ' + error.message

        console.log(data)

  return (
    <div >
        <h1>content</h1>
    </div>
  );
}

export default Content;
