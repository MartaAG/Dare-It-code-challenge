import React from 'react';
import { Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
//why navigate(-1) does not work as expected? It goes straigh to the login page.


function BackButton() {
    const navigate = useNavigate();

  return (
        <Button 
        colorScheme='teal' 
        variant='outline'
        onClick={() => navigate('/content')}
        >
          Back
        </Button>

  );
}

export default BackButton;
