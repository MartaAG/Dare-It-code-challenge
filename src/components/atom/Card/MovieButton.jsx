import React from 'react';
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function MovieButton({id, title}) {
  const navigate = useNavigate();



  return (
        <Button 
        colorScheme='teal' 
        variant='outline' 
        onClick={() => navigate(`/movies/${id}`, { replace: true })} >
          {title}
        </Button>

  );
}

export default MovieButton;
