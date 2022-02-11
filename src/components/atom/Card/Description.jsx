import React from 'react';
import { Text, } from "@chakra-ui/react";


function Description({title, description}) {
  return (
    <>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {title}
      </Text>
      <Text mt={2}>{description}</Text>
    </>

  );
}

export default Description;
