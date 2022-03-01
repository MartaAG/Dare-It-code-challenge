import React from 'react';
import { createStandaloneToast } from '@chakra-ui/react'



function ErrorBar(error) {
    const toast = createStandaloneToast()
    const description = JSON.stringify(error)
    

       

  return (
    toast({
        title: 'An error occurred.',
        description: description,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
  );
}

export default ErrorBar;
