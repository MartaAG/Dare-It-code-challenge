import React from 'react';
import { Box, Center, Image, Flex, Text, Button } from "@chakra-ui/react";


function Movies() {
  return (
    <Center h="100vh">
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex align="baseline" mt={2}>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Title of the film
      </Text>
      <Text mt={2}>short description of the film</Text>
      <Flex mt={2} align="center">
      </Flex>
        <Button colorScheme='teal' variant='outline'>
          See details
        </Button>
    </Box>
  </Center>
  );
}

export default Movies;
