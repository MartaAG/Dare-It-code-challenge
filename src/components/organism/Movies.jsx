import React from 'react';
import Card from '../molecule/Card';



function Movies({moviesData}) {
  return (
    <>
    {moviesData.map((mv) => {
      return (
        <Card title={mv.title} id={mv.id} description={mv.description} image={mv.image}/>
      )
    })}
    </>
  );
}

export default Movies;
