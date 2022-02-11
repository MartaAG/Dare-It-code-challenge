import React from 'react';
import { Image, } from "@chakra-ui/react";


function Photo({image}) {
  return (

      <Image borderRadius="md" src={image} />
     
  );
}

export default Photo;
