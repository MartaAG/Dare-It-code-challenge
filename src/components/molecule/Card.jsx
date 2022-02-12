import React from 'react';
import { Box, Flex,} from "@chakra-ui/react";
import Photo from '../atom/Card/Photo';
import Description from '../atom/Card/Description';
import MovieButton from '../atom/Card/MovieButton';


function Card({title, id, description, image}) {
  return (
    
    <Box p="5" maxW="320px" borderWidth="1px" >
      <Photo image={image}/>
      <Flex align="baseline" mt={2}>
      </Flex>
      <Description title={title} description={description}/>
      <Flex mt={2} align="center">
      </Flex>
        <MovieButton id={id} title={title}/>
    </Box>
  );
}

export default Card;
