import React from 'react';
import {useQuery} from 'react-query'
import Movies from '../components/organism/Movies';
import { SimpleGrid, Center } from '@chakra-ui/react'


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
      <Center>
      <SimpleGrid columns={[2, null, 5]} spacing='40px'>
        <Movies moviesData={data}/>
      </SimpleGrid>
      </Center>
    </div>
  );
}

export default Content;
