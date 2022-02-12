import React from 'react';
import { Button } from "@chakra-ui/react";
import {
  Link,
} from "react-router-dom";


function MovieButton({id, title}) {
  return (
        <Button colorScheme='teal' variant='outline'>
          <ul>
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
        </ul>
        </Button>
  );
}

export default MovieButton;
