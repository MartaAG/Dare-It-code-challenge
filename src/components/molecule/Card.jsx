import React from 'react';
import { Box, Center, Flex,} from "@chakra-ui/react";
import Photo from '../atom/Card/Photo';
import Description from '../atom/Card/Description';
import MovieButton from '../atom/Card/MovieButton';


function Card() {
  return (
    <Center h="100vh">
    <Box p="5" maxW="320px" borderWidth="1px">
      <Photo/>
      <Flex align="baseline" mt={2}>
      </Flex>
      <Description/>
      <Flex mt={2} align="center">
      </Flex>
        <MovieButton/>
    </Box>
  </Center>
  );
}

export default Card;
