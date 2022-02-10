import React from 'react';
import { Text, } from "@chakra-ui/react";


function Description() {
  return (
    <>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Title of the film
      </Text>
      <Text mt={2}>short description of the film</Text>
    </>

  );
}

export default Description;
