import React from 'react';
import {useQuery} from 'react-query'
import Movies from '../components/organism/Movies';
import { SimpleGrid, Center } from '@chakra-ui/react'
import LoadingBar from '../components/atom/Card/LoadingBar';
import ErrorBar from '../components/atom/ErrorBar';
import _ from 'lodash';

function Content() {


        const { isLoading, error, data } = useQuery('repoData', () =>
          fetch('https://ghibliapi.herokuapp.com/films').then(res =>
            res.json()
          )
        )
        if (isLoading) {
          return <LoadingBar />}
        console.log(error)
        if (!_.isEmpty(error)) {
          return <ErrorBar error={'an error occured' + error.message}/>}

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
